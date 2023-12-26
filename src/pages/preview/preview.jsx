import React, { useEffect, useState } from 'react'

import './preview.scss'

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getItem } from '../../features/getSingleItemSlicer';
import ProductDiv from '../../components/product-div/productdiv';
import LoaderComp from '../../components/loader';
import RatingComp from '../../components/rating';
import PreviewImage from '../../components/preview-div/preview_img';

const Preview = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const { product } = useSelector(state => state)

    const angles = [-90, 0, 45];
    const [angle, setAngleImage] = useState(0);
    const bg_color = ['skyblue', 'red', 'yellow', 'gray'];
    const [bg, setBg] = useState('skyblue');
    const sizes = [34, 36, 38, 40, 44, 46];
    const [c_border, setC_Border] = useState(0);

    useEffect(() => {
        (async () => {
            const res = await dispatch(getItem(+id));
            // console.log("response....", res);
        })()
    }, [id])


    return (
        <div className="outer">
            <div className="inner">
                <ProductDiv leftTitle={'Back'} centerTitle={'Product'} rightTitle={'Next Product'} isSelect={false} />
                <div className='product-details'>
                    {
                        product.loading ?
                            <LoaderComp />
                            :
                            <div className='details'>
                                {
                                    product.product.title &&
                                    <>
                                        <div className="detail">
                                            <div className="name">{product.product.title}</div>
                                            <div className="description">{product.product.description}</div>
                                            <div className="angles">
                                                {
                                                    angles.map((e) => {
                                                        return <div key={e} className={`${e}-d`} style={{backgroundColor :angle === e ?  'rgb(225, 173, 242)' : 'white'}} onClick={() => setAngleImage(e)}><img src={product.product.image} style={{ transform: `rotate(${e}deg)` }} alt={product.product.title} height={45} width={45} /></div>
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className="pro-img" style={{ backgroundColor: bg }}>
                                            <div className='pro-img-1'>
                                                <PreviewImage imgsrc={product.product.image} imgalt={product.product.title} angle={angle} />
                                                {/* <img src={product.product.image} alt={product.product.title} style={{ transform: `rotate(${angle}deg)` }} height={150} width={150} /> */}
                                                <div className="price">&#8377;{product.product.price}</div>
                                            </div>
                                            <div className="pro-img-bg"></div>
                                        </div>

                                        <div className="pro-rating">
                                            <div className="rating">
                                                Review : <RatingComp rating={product.product.rating.rate} /> {product.product.rating.rate} - ({product.product.rating.count})
                                            </div>
                                            <div className="colors"> <span>Color : </span>
                                                {
                                                    bg_color.map((e, index) => {
                                                        return <div key={e} className='color' style={{ border: c_border === index ? `1.5px solid ${bg_color[index]}` : '' }} onClick={() => { setBg(e); setC_Border(index) }}>
                                                            <div className='inner-color' style={{ backgroundColor: `${bg_color[index]}` }}></div>
                                                        </div>
                                                    })
                                                }
                                            </div>
                                            <div className="sizes-div">
                                                <span>Size : </span>
                                                <div className="sizes">
                                                    {
                                                        sizes.map((e) => {
                                                            return <div key={e} className="size">{e}</div>
                                                        })
                                                    }

                                                </div>
                                            </div>

                                            <div className="add-cart cursor-pointer">Add to cart</div>
                                        </div>
                                    </>
                                }
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Preview