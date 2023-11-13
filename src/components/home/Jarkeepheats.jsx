import React from 'react';
import { Link } from 'react-router-dom';
import { jarKeepHeating } from '../../utils/jarKeepHeating';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { slideImages } from '../../utils/slideImages';

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px',
    width: '30%',
};
const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000',
};

function Jarkeepheat() {
    return (
        <div className="jarheating">
            <div className="inner">
                <div className="girds">
                    <div className="jar-title">
                        <h2>Bình Giữ Nhiệt</h2>
                    </div>
                </div>

                <div className="boxItems">
                    <div className="girds">
                        <div className="product">
                            {jarKeepHeating.map((jar, index) => (
                                <div className="product-items">
                                    <div className="product-name">
                                        <Link to={`${jar.link}`} key={index}>
                                            <h2>{jar.name}</h2>
                                        </Link>
                                    </div>
                                    <div className="product-price">
                                        <p className="price-sale">{jar.priceSale}</p>
                                        <p className="price cost">{jar.priceCost}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="slideshow">
                                <Slide>
                                    {slideImages.map((slideImage, index) => (
                                        <div
                                            key={index}
                                            className="flex  items-center justify-center bg-cover h-[400px] w-[30%]"
                                        >
                                            <div>{`${slideImage.url}`}</div>
                                        </div>
                                    ))}
                                </Slide>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Jarkeepheat;
