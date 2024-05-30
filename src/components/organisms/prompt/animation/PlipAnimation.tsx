import React, {FC} from "react";
import {AnimationControls, motion, useAnimation} from "framer-motion";
import PlipOutlineIcon from "@/src/components/atoms/icons/PlipOutlineIcon";

const variants = {
    hidden: {
        scale: 1.0,
        opacity: 0,
    },
    init: {
        scale: 1.0,
        opacity: 1,
    },
    action: {
        scale: 3.0,
        opacity: 0,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 30
        }
    },
};

export const usePlipAnimation = () => {
    const animations = useAnimation()

    return {
        disable: () => {
            animations.set("hidden")
            animations.stop()
        },
        active: () => {
            animations.set("init")
            animations.start("action")

        },
        control: animations,
    }
}

const PlipAnimation: FC<{ control: AnimationControls }> = ({control}) => {
    return (
        <div className={'fixed top-[50%] left-[50%]'}>
            <motion.div layout variants={variants} initial={"hidden"} animate={control}>
                <PlipOutlineIcon isPlip/>
            </motion.div>
        </div>
    )
}

export default React.memo(PlipAnimation)