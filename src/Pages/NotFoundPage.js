import React from "react";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <motion.section
            initial="hidden"
            animate="visible"
            variants={variants}
            className="faq-container faq-sec"
        >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="w-100">
                            <h3 className="main-title">
                                <b>404 - Page Not Found - </b>
                                <Link to="/">Homepage</Link>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default NotFoundPage;
