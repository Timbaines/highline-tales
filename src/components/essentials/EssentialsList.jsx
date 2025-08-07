import React from 'react';
import { essentialsData } from "@/data/essentialsData.js";

/***** MODULE STYLES *****/
import styles from '@/components/essentials/EssentialsList.module.css';

export default function HikingGearList() {
    return (
        <>
            <div className={styles.hikingGrid}>
                {essentialsData.map(hikingItem => {
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