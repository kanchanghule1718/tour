import React from 'react'

export default function ContactUs() {
    return (
        <div>
            <button style={{ position: "fixed", marginRight: "0px", marginTop: "200px" }} class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><img src="https://i.pinimg.com/736x/14/28/e7/1428e7756c2f08bc105c7741a1f16e52.jpg" height={90} width={90} /></button>

            <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div class="offcanvas-header">
                    <h2 class="offcanvas-title" id="offcanvasScrollingLabel"><span style={{ color: "rgb(255, 195, 0)" }}>Co</span>ntact</h2>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <p><i class="bi bi-telephone-fill"> &nbsp;</i>Group Tours</p>
                    <h4>77 1800 266 1100</h4>
                    <br />
                    <p><i class="bi bi-telephone-fill"> &nbsp;</i>Tailormade Holidays</p>
                    <h4>77 1800 266 1122</h4>
                    <br />
                    <p><i class="bi bi-telephone-fill"> &nbsp;</i>Corporate Travel</p>
                    <h4>77 1800 266 1133</h4>
                    <br />
                    <p><i class="bi bi-telephone-fill"> &nbsp;</i>Special Tours</p>
                    <h4>77 1800 266 1144</h4>
                    <br />
                    <span><p> <i class="bi bi-stopwatch-fill"></i> Office time: </p><h4> 9am to 7pm</h4></span>
                </div>
            </div>
        </div>
    )
}
