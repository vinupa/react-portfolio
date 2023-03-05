import React from "react";
import ucsc from "../../images/ucsc.png"
import rc from "../../images/royal.jpg"

function Education() {
    return(
        <section>
            <div>
                <div class="title is-2 has-text-black is-hidden-tablet mt-4 ml-4">Education</div>
                <div class="title is-1 has-text-black is-hidden-mobile mt-6 ml-6">Education</div>
            </div>

            <div class="columns is-mobile is-centered is-vcentered p-4">
                <div class="column is-one-quarter-tablet edu-icon">
                    <img src={ucsc} alt="Logo" />
                </div>
                <div class="column is-half-tablet">
                    <span class="is-size-5-mobile is-size-4-tablet has-text-black has-text-weight-medium">University of Colombo
                        School of Computing</span><br />
                    <span class="is-size-6">BSc. Information Systems (Undergraduate)</span><br />
                    <span class="is-size-6 has-text-weight-semibold">2022 - Present</span>
                </div>
            </div>

            <div class="columns is-mobile is-centered is-vcentered p-4">
                <div class="column is-one-quarter-tablet edu-icon">
                    <img src={rc} alt="Logo" />
                </div>
                <div class="column is-half-tablet">
                    <span class="is-size-5-mobile is-size-4-tablet has-text-black has-text-weight-medium">
                        Royal College, Colombo 07</span><br />
                    <span class="is-size-6">Physical Science Stream</span><br />
                    <span class="is-size-6 has-text-weight-semibold">2006 - 2019</span>
                </div>
            </div>
        </section>
    );
}

export default Education;