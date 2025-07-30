import React from 'react';
import { hikingGearData } from "@/data/hikingGearData.js";

/***** MODULE STYLES *****/
import styles from '@/components/gear/GearList.module.css';

export default function HikingGearList() {
    return (
        <>
            <h2>Checklist</h2>
            <div className={styles.hikingGrid}>
                {hikingGearData.map(hikingItem => {
                    const IconComponent = hikingItem.icon;
                    return (
                        <div key={hikingItem.id} className={styles.item}>
                            <span className={styles.icon}><IconComponent /></span>
                            <span className={styles.text}>{hikingItem.name}</span>
                        </div>
                    );
                })}
            </div>
        </>
    );
}