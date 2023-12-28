import React, { useEffect, useState } from 'react'

import './preview.scss'

import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getItem } from '../../features/getSingleItemSlicer';
import ProductDiv from '../../components/product-div/productdiv';
import LoaderComp from '../../components/loader';
import RatingComp from '../../components/rating';
import PreviewImage from '../../components/preview-div/preview_img';
import { setAddCartItem } from '../../features/allSlicer';
import { Alert, Snackbar } from '@mui/material';
import SnackBar from '../../components/snackbar';

const Preview = () => {

    const { id } = useParams();
    const dispatch = useDispatch()
    const product  = useSelector(state => state.product)
    const cartItem = useSelector(state => state.all.cart);
    const theme = useSelector(state => state.all.theme);
    const angles = [0, 90, 180, -90];
    const [angle, setAngleImage] = useState(0);
    const bg_color = ['white', 'skyblue', 'red', 'yellow'];
    const [bg, setBg] = useState('white');
    const sizes = [34, 36, 38, 40, 44, 46];
    const [itemsize, setItemSize] = useState(34);
    const [c_border, setC_Border] = useState(0);
    const [isdisabledBtn, setIsDisabledBtn] = useState(false);
    const [snack, setSnack] = useState(false);

    const checkItem = (val) => {
        const ind = cartItem.some(e => e.product.id === +id && e.specs.color === val.color && e.specs.size === val.size);
        if (ind) setIsDisabledBtn(true);
        else setIsDisabledBtn(false)
    }

    const setCart = () => {
        setSnack(true);
        const sp = {
            color: bg,
            size: itemsize,
            amount: product.product.price,
            quantity: 1,
        }
        const addedSpecs = {
            ...product,
        }
        addedSpecs['specs'] = sp;
        dispatch(setAddCartItem(addedSpecs))
        setIsDisabledBtn(true);
    }

    useEffect(() => {
        (async () => {
            const res = await dispatch(getItem(+id));
        })()
        checkItem({ color: bg, size: itemsize })
    }, [id])



    return (
        <div className="outer">
            <div className="inner">
                <ProductDiv nav={'/shop'} leftTitle={'Back'} centerTitle={'Product'} rightTitle={'Next Product'} isSelect={false} />
                {
                    snack && <SnackBar changesnack={setSnack} message={'Item Added Successfully'} color={'success'}/>
                }
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
                                            <div className="angles cursor-pointer">
                                                {
                                                    angles.map((e) => {
                                                        return <div key={e} className={`${e}-d ${theme === 'dark' && angle === e ? 'dark-size' : theme !== 'dark' && angle === e ? 'light-size' : 'white'} `} onClick={() => setAngleImage(e)}><img src={product.product.image} style={{ transform: `rotate(${e}deg)` }} alt={product.product.title} height={45} width={45} /></div>
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className="pro-img" style={{ backgroundColor: bg }}>
                                            <div className='pro-img-1'>
                                                <PreviewImage imgsrc={product.product.image} imgalt={product.product.title} angle={angle} />
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
                                                        return <div key={e} className='color' style={{ border: c_border === index ? `1.5px solid ${bg_color[index]}` : '' }} onClick={() => { setBg(e); setC_Border(index); checkItem({ color: e, size: itemsize }) }}>
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
                                                            return <div key={e} className={`size ${theme === 'dark' && itemsize === e ? 'dark-size' : theme !== 'dark' && itemsize === e ? 'light-size' : ''}`} onClick={() => { setItemSize(e); checkItem({ color: bg, size: e }) }}>{e}</div>
                                                        })
                                                    }
                                                </div>
                                            </div>
                                            {
                                                isdisabledBtn ?
                                                    <Link to='/cart' className='text-decoration=-none'>
                                                        <input type="button" value="Go to Cart" className={`add-cart cursor-pointer`} />
                                                    </Link>
                                                    :
                                                    <input type="button" value="Add to Cart" className={`add-cart cursor-pointer`} onClick={setCart} />
                                            }
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