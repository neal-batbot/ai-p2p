package com.babata.chip.repository;

import com.babata.chip.common.dto.MeetingBookingDTO;
import com.babata.chip.common.request.MeetingBookingRequest;
import jakarta.annotation.PostConstruct;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public class MeetingBookingRepository {
    private static final RowMapper<MeetingBookingDTO> BOOKING_MAPPER = (resultSet, rowNum) -> {
        MeetingBookingDTO booking = new MeetingBookingDTO();
        booking.setId(resultSet.getLong("id"));
        booking.setName(resultSet.getString("name"));
        booking.setEmail(resultSet.getString("email"));
        booking.setCompany(resultSet.getString("company"));
        booking.setTopic(resultSet.getString("topic"));
        booking.setMeetingAt(resultSet.getTimestamp("meeting_at").toLocalDateTime());
        booking.setStatus(resultSet.getString("status"));
        booking.setCreateTime(resultSet.getTimestamp("create_time").toLocalDateTime());
        return booking;
    };

    private final JdbcTemplate jdbcTemplate;

    public MeetingBookingRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @PostConstruct
    public void ensureTable() {
        jdbcTemplate.execute("""
                CREATE TABLE IF NOT EXISTS meeting_booking (
                    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(128) NOT NULL,
                    email VARCHAR(256) NOT NULL,
                    company VARCHAR(256) DEFAULT NULL,
                    topic TEXT NOT NULL,
                    meeting_at DATETIME NOT NULL,
                    status VARCHAR(32) NOT NULL DEFAULT 'PENDING',
                    create_time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
                    modify_time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                    KEY idx_meeting_at (meeting_at),
                    KEY idx_status (status)
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
                """);
    }

    public long create(MeetingBookingRequest request, LocalDateTime meetingAt) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbcTemplate.update(connection -> {
            PreparedStatement statement = connection.prepareStatement("""
                    INSERT INTO meeting_booking (name, email, company, topic, meeting_at)
                    VALUES (?, ?, ?, ?, ?)
                    """, Statement.RETURN_GENERATED_KEYS);
            statement.setString(1, request.getName().trim());
            statement.setString(2, request.getEmail().trim());
            statement.setString(3, request.getCompany() == null ? null : request.getCompany().trim());
            statement.setString(4, request.getTopic().trim());
            statement.setObject(5, meetingAt);
            return statement;
        }, keyHolder);
        return keyHolder.getKey().longValue();
    }

    public List<MeetingBookingDTO> findAll() {
        return jdbcTemplate.query("SELECT id, name, email, company, topic, meeting_at, status, create_time "
                + "FROM meeting_booking ORDER BY meeting_at ASC, id DESC", BOOKING_MAPPER);
    }

    public int countByStatus(String status) {
        Integer count = jdbcTemplate.queryForObject("SELECT COUNT(*) FROM meeting_booking WHERE status = ?", Integer.class, status);
        return count == null ? 0 : count;
    }

    public int countAll() {
        Integer count = jdbcTemplate.queryForObject("SELECT COUNT(*) FROM meeting_booking", Integer.class);
        return count == null ? 0 : count;
    }

    public boolean hasBookingAt(LocalDateTime meetingAt) {
        Integer count = jdbcTemplate.queryForObject("SELECT COUNT(*) FROM meeting_booking WHERE meeting_at = ? AND status <> 'CANCELLED'", Integer.class, meetingAt);
        return count != null && count > 0;
    }

    public int updateStatus(long id, String status) {
        return jdbcTemplate.update("UPDATE meeting_booking SET status = ? WHERE id = ?", status, id);
    }
}
