package com.babata.chip.common.dto;

import com.babata.chip.repository.entity.ChipDO;
import com.babata.chip.repository.entity.Pin2PinDO;

import java.util.List;

public class ChipDetailDTO {
    private ChipDO chip;
    private List<Pin2PinDO> pin2pins;

    public ChipDO getChip() {
        return chip;
    }

    public void setChip(ChipDO chip) {
        this.chip = chip;
    }

    public List<Pin2PinDO> getPin2pins() {
        return pin2pins;
    }

    public void setPin2pins(List<Pin2PinDO> pin2pins) {
        this.pin2pins = pin2pins;
    }


}
