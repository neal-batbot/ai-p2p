package com.babata.chip.common.dto;

import com.babata.chip.repository.entity.ChipDO;

import java.util.List;

public class ChipSearchDTO {
    private List<ChipDO> chips;

    public List<ChipDO> getChips() {
        return chips;
    }

    public void setChips(List<ChipDO> chips) {
        this.chips = chips;
    }
}
