import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';

function Form({onSubmit}) {
  const form = useRef()

  const { homes } = useSelector(state => state.homesReducer)
  
  const dispatch = useDispatch();
  const [star, setStar] = useState('')


  useEffect(() => {
    dispatch({ type: 'FETCH_GET_HOMES' })
  }, [dispatch])

  const formHandler = (e) => {
    e.preventDefault();
   
    const info = Object.fromEntries(new FormData(form.current));
    const selected = document.getElementById("select-id");
    const value = selected.options[selected.selectedIndex].value;

    const newReview = {
      house_id: +value,
      rating: star,
    }
    const payload = { ...newReview, ...info }
    dispatch({ type: "FETCH_POST_REVIEW", payload });
    
    onSubmit();
  }
 
 return (

    <div className="central-form">
      <div className="col">
        <h2 className="title">
          <p className="styles_typicalWrapper__1_Uvh">Напишите свой отзыв 📨</p>
        </h2>
      </div>
      <div className="back-form">
        <div className="img-back">
        </div>
        <form ref={form} onSubmit={formHandler}>
          <p></p>
          <label className='label-text'>
            Имя
            <input name='nameUser' className='name-input' type="text" />
          </label>
          <label className='label-text'>
            Сообщение
            <textarea name='description' placeholder="Вам понравилось?" type="text"></textarea>
          </label>

          <div className="input-field col s12" style={{ marginBottom: "50px" }}>
            <select className="SelFo" style={{ display: 'block' }} id='select-id'>
              <option value="" disabled selected>Выбери дом</option>
              {homes?.length ? homes.map(el => <option name='sel' value={el.id} key={el.id}>{el.name}</option>) : <option>None </option>}
            </select>

          </div>


          <label className='label-text'>
            Оцените нас
            <ReactStars
              count={5}
              onChange={(value) => setStar(value)}
              size={24}
              activeColor="#ffd700"

            />
          </label>
          <div>
            <button>
              <span className="send-text" >Отправить</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
