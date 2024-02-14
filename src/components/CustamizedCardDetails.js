
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetchApi';



export default function CustamizedCardDetails() {
    const param = useParams()

    let { data: product } = useFetch(`http://localhost:3000/tours/${param.id}`)


    console.log(param.id);

    if (product) {
        console.log(product.image);
        return (
            <div>



                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            <div className="card border-0 shadow-lg p-3 mb-5 bg-body rounded" style={{ width: "35rem" }} >
                                <img src={product.image} className="card-img-top" alt="..." style={{ height: "300px" }} />
                                <div className="card-body">
                                    <h4 className="card-title" style={{ color: "rgb(199, 0, 57 )" }}>{product.name}</h4>
                                    <p className="card-text" style={{ color: "rgb(16, 118, 147 )" }}><b>Description :</b>If you're going from one place to another, you're travelling. People love to go travelling to see new places and experience different cultures. When people are travelling, they’re not just running around the block; they're on a journey. {product.description}</p>
                                    <p className="card-text" style={{ color: "rgb(255, 195, 0 )" }}><b>Category</b> : {product.city}</p>
                                    <h5 className="card-text" style={{ color: "rgb(144, 12, 63 )" }}>Super Deal Price:&#x20B9;&nbsp;{product.price}</h5>
                                    <div class="d-grid gap-2">

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="col">
                            <h3 style={{ textAlign: "left", color: "rgb(49, 155, 181 ) " }}>All inclusive tours, Chalo Bag Bharo Nikal Pado!</h3>
                            <p style={{ textAlign: "left", color: "gray" }}>Tour guests will report at Chhatrapati Shivaji Maharaj Domestic/International Airport, Mumbai as per the scheduled flight departure time and fly to Ahmedabad. Upon arrival we proceed to the Udaipur </p>

                            <h5 style={{ textAlign: "left", color: "gray" }}>Tour Includes:</h5>
                            <div class="col" style={{ flexDirection: "column" }}>
                                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6 ">
                                    <div class="col"><img src="https://www.svgrepo.com/show/264392/meal.svg" height={50} width={50} alt='' /><span><p>Meals</p></span> </div>
                                    <div class="col"><img src="https://cdn-icons-png.freepik.com/512/1668/1668966.png" height={50} width={50} alt='' /><span><p>Hotel</p></span> </div>
                                    <div class="col"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYWVpTEEQCxkkifs0qPyzgAqzdF8RJgkDL7A&usqp=CAU" alt='' height={50} width={50} /><span><p>Transport</p></span> </div>
                                    <div class="col"><img src="https://cdn-icons-png.freepik.com/512/7060/7060076.png" height={50} width={50} alt='' /><span><p>Sightseeing</p></span> </div>
                                    <div class="col"><img src="https://cdn.iconscout.com/icon/free/png-256/free-plane-3802463-3168528.png?f=webp" alt='' height={50} width={50} /><span><p>Flights</p></span> </div>

                                </div>
                            </div>


                            <h5 style={{ textAlign: "left", color: "gray" }}>Key Highlights:</h5>
                            <ul>
                                <li style={{ textAlign: "left", color: "rgb(255, 81, 168)" }}>Five star hotels</li>
                                <li style={{ textAlign: "left", color: "rgb(255, 81, 168)" }}>Delicious Breakfast</li>
                                <li style={{ textAlign: "left", color: "rgb(255, 81, 168)" }}>Sight Seeing</li>
                                <li style={{ textAlign: "left", color: "rgb(255, 81, 168)" }}>Luxury Bus</li>
                                <li style={{ textAlign: "left", color: "rgb(255, 81, 168)" }}>Lunch & Dinner</li>

                            </ul>

                            <h5 style={{ textAlign: "left", color: "gray" }}>Departure & arrival:</h5>
                            <ul>
                                <li style={{ textAlign: "left", color: "rgb(3, 130, 150  )" }}>Mumbai</li>
                                <li style={{ textAlign: "left", color: "rgb(3, 130, 150 )" }}>Pune</li>


                            </ul>

                            <h5 style={{ textAlign: "left", color: "gray" }}>All Departure Dates</h5>
                            <ul>
                                <li style={{ textAlign: "left", color: "rgb(169, 198, 54   )" }}>Mar/2024</li>
                                <li style={{ textAlign: "left", color: "rgb(169, 198, 54    )" }}>May/2024</li>


                            </ul>
                        </div>


                    </div>
                </div>




                <div className='container'>
                    <div className='row '>
                        <div className='col-lg-4 ' style={{ borderRadius: "10px" }}>
                            <h4 style={{ color: "rgb(3, 130, 150  )" }}>Itinerary <small>(Day Wise)</small> </h4>
                            <dl>
                                <dt style={{ color: "gray" }}>Day-1</dt>
                                <dd>Upon arrival we proceed to the Udaipur – former capital and crown jewel of Mewar Kingdom also famous as City of Lakes.</dd>
                                <dt style={{ color: "gray" }}>Day 2</dt>
                                <dd> Today we explore Udaipur City, Later we visit City Palace<ul>
                                    <li>Udaipur City Palace</li>
                                    <li>Lake Pichola</li>
                                    <li>Jag Mandir</li>
                                </ul></dd>
                                <dt style={{ color: "gray" }}>Day 3</dt>
                                <dd>watching wide variety of wildlife in their natural habitat<ul>
                                    <li>Jawai Leopard Conservation Reserve</li>

                                    <li>Jungle Safari</li>
                                    <li>Jagat Palace</li>
                                </ul></dd>

                            </dl>

                        </div>    {/* first col end here */}


                        <div className='col-lg-8'>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <h5 style={{ color: "gray" }}>Tour Inclusions:</h5>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul>
                                                <li>To and Fro economy class air ticket (Ex-Mumbai) with current airport taxes</li>
                                                <li>Baggage Allowance as per the airline policy</li>
                                                <li>Accommodation in comfortable hotels on twin/triple/Single sharing basis</li>
                                                <li>Guide & driver tips, hotel & restaurants tips</li>
                                                <li>Accompanied local guide/s services wherever require</li>
                                                <li>Travel Insurance for guests up to 70 years of age</li>
                                                <li>Baggage Allowance as per the airline polic</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <h5 style={{ color: "gray" }}> Tour Exclusions</h5>
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul>
                                                <li>Government of India Goods & Services Tax (GST) of 5%</li>
                                                <li>Baggage Allowance as per the airline policy</li>
                                                <li>Any increase in airfare, airport tax, fuel surcharge etc</li>
                                                <li>Cost of Insurance</li>
                                                <li>Cost of any optional activity or service</li>
                                                <li>Travel Insurance for guests up to 70 years of age</li>
                                                <li>Baggage Allowance as per the airline polic</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <h5 style={{ color: "gray" }}> Advance Preperations</h5>
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul>
                                                <li>As everyone is becoming a frequent traveller now, we suggest that you make your own travel accessories kit to ensure a stress free holiday.</li>
                                                <li>Baggage Allowance as per the airline policy</li>
                                                <li>Any increase in airfare, airport tax, fuel surcharge etc</li>
                                                <li>Always make sure to carry less and light luggage, use a four wheel small or medium suitcase and please make sure that you are carrying only one suitcase per person. This will ensure that you will travel smartly and without any inconveniences.</li>
                                                <li>For international tours, please carry a universal adapter for charging your cameras and mobile phones.</li>
                                                <li>Travel Insurance for guests up to 70 years of age</li>
                                                <li>Baggage Allowance as per the airline polic</li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>






            </div>
        )
    }
}
