"use client";
import {useEffect, useMemo, useState} from "react";
import {Cloud, fetchSimpleIcons, renderSimpleIcon} from "react-icon-cloud";

export const cloudProps = {
    containerProps: {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingTop: 40,
        },
    },
    options: {
        reverse: true,
        depth: 1,
        wheelZoom: false,
        imageScale: 2,
        activeCursor: "default",
        tooltip: "native",
        initial: [0.1, -0.1],
        clickToFront: 500,
        tooltipDelay: 0,
        outlineColour: "#000",
        maxSpeed: 0.04,
        minSpeed: 0.02,
    },
};

const renderCustomIcon = (icon) => {
    return renderSimpleIcon({
        icon,
        bgHex: "#080510",
        fallbackHex: "#ffffff",
        minContrastRatio: 2,
        size: 42,
        aProps: {
            href: undefined,
            target: undefined,
            rel: undefined,
            onClick: (e) => e.preventDefault(),
        },
    });
};

export default function IconCloud({iconSlugs = [], imageArray}) {
    const [data, setData] = useState(null);

    useEffect(() => {
        if (iconSlugs.length > 0) {
            fetchSimpleIcons({slugs: iconSlugs}).then(setData);
        }
    }, [iconSlugs]);

    const renderedIcons = useMemo(() => {
        if (!data) return null;
        return Object.values(data.simpleIcons).map((icon) =>
            renderCustomIcon(icon)
        );
    }, [data]);

    return (
        <Cloud {...cloudProps}>
            <>
                {renderedIcons}
                {imageArray &&
                    imageArray.length > 0 &&
                    imageArray.map((image, index) => (
                        <a key={index} href="#" onClick={(e) => e.preventDefault()}>
                            <img
                                height="42"
                                width="42"
                                alt="icon"
                                src={image}
                                draggable="false"
                            />
                        </a>
                    ))}
            </>
        </Cloud>
    );
}