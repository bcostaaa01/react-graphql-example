'use client'
import React from "react";
import {Card} from "flowbite-react";

interface Props {
    className?: string;
}

const CardComponent = (props: Props) => {

    return (
        <Card className={props.className}>
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Work fast from anywhere</h5>
            <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
                Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today.
            </p>
        </Card>
    );
}

export default CardComponent;