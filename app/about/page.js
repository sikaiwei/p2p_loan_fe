"use client"

import React, { useState, useEffect } from 'react';
import Vote from './vote'
import { Web3Provider } from '../Web3Provider.jsx'

export default function About() {
    return (
            <Web3Provider>
                <Vote/>
            </Web3Provider>
    )  
}