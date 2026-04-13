'use client';
import React from 'react'
import styles from './style.module.scss';

export default function index({index, title, manageModal}) {

    const labels = [
        "GenAI SaaS Platform",
        "Community Funding Product",
        "Education Technology Platform",
        "Architecture Brand Experience"
    ]

    return (
        <div onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className={styles.project}>
            <h2>{title}</h2>
            <p>{labels[index] || "Product Engineering"}</p>
        </div>
    )
}
