import React from 'react';
import { essentialsData } from "@/data/essentialsData.js";

/***** MODULE STYLES *****/
import styles from '@/components/essentials/EssentialsList.module.css';

export default function EssentialsList() {
    return (
        <>
            <div className={styles.essentialsGrid}>
                {essentialsData.map(essentialsItem => {
                    const IconComponent = essentialsItem.icon;
                    return (
                        <div key={essentialsItem.id} className={styles.item}>
                            <span className={styles.icon}><IconComponent /></span>
                            <span className={styles.text}>{essentialsItem.name}</span>
                        </div>
                    );
                })}
            </div>
        </>
    );
}