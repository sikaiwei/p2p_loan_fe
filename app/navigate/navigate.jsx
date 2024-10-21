"use client"
import styles from "./navigate.css";
import Link from 'next/link'
import {useState, useEffect} from 'react';

export default function Navigate() {


    return (
        <nav className="navbar">
        <div className="brandTitle">P2P Loan Platform</div>

        <ul className="nav-list">
            <li><Link href="/" >首页</Link></li>
            <li><Link href="/loanform" >筹款广场</Link></li>
            <li><Link href="#" >交易大厅</Link></li>
            <li><Link href="/about" >关于我们</Link></li>
            <li><Link href="#">新闻资讯</Link></li>
            <li><Link href="#">下载 APP</Link></li>
        </ul>
        </nav>
    )  
}
