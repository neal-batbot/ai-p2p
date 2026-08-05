package com.babata.chip.config;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.util.CollectionUtils;

import java.util.Arrays;
import java.util.List;

@Configuration
public class AlbumFileAllowedTypeConfig {
    private List<String> types;

    public List<String> getTypes() {
        return this.types;
    }

    @Value("${files.allow-type.album-file-allowed-type}")
    public void setTypes(String listStr) {
        this.types = Arrays.asList(listStr.split(", "));
    }

    public boolean isAllowedType(String fileType) {
        if (StringUtils.isBlank(fileType) || CollectionUtils.isEmpty(types)) {
            return false;
        }
        return types.contains(fileType);
    }
}
