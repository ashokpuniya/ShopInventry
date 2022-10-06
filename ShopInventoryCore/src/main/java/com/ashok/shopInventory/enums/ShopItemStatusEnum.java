package com.ashok.shopInventory.enums;

public enum ShopItemStatusEnum {
	LIVE("LIVE"),
	CURRENT("CURRENT"),
	DEAD("DEAD"),
	PROCESSED("PROCESSED");
	
	String name;

	ShopItemStatusEnum(String name){
		this.name= name;
	}
	public String getName() {
		return name;
	}
	
}
