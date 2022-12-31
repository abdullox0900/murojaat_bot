import React, { useEffect, useState } from "react";
import { Select, InputNumber, Mentions, Input, Button } from 'antd';
import Swal from 'sweetalert2';
import Container from "../Container/Container";

import "./Form.scss"

function Form() {

    const [data, setData] = useState([])
    const [cityId, setCityId] = useState('')
    const [userName, setUserName] = useState('');
    const [userTell, setUserTell] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userMap, setUserMap] = useState('');
    const [userComment, setUserComment] = useState('');

    const handleChange = (value) => {
        setCityId(value)
    };

    console.log(cityId);
    console.log(userName);
    console.log(userTell);
    console.log(userEmail);
    console.log(userComment);
    console.log(userMap);

    useEffect(() => {
        fetch("https://bot.ali98.uz/api/hudut")
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    function onSubmit(e) {
        e.preventDefault()

        var formdata = new FormData();
        formdata.append("phone", userTell);
        formdata.append("name", userName);
        formdata.append("email", userEmail);
        formdata.append("subject", userMap);
        formdata.append("message", userComment);
        formdata.append("hudud_id", cityId);

//         formdata.append("phone", "456564");
// formdata.append("name", "name");
// formdata.append("subject", "mavzu");
// formdata.append("message", "text ");
// formdata.append("hudud_id", "2");

        var requestOptions = {
            method: 'POST',
            body: formdata,
            headers: myHeaders,
            redirect: 'follow'
        };

        if (userName == '' || userTell == '' || userComment == '') {
            Swal.fire(
                `Ma'lumot Toldrin`,
            )
        } else {
            fetch('https://bot.ali98.uz/api/send', requestOptions)
                .then(response => {
                    console.log(response);
                    if (response.ok) {
                        Swal.fire({
                            icon: 'success',
                            title: `Ma'lumot jonatildi tez orada sizblan bog'lanamiz`,
                            showConfirmButton: false,
                            timer: 10000,
                        })
                        setUserName('')
                    }else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Xatolik Yuzberdi',
                        })
                    }
                })
                .catch(error => Swal.fire({
                    icon: 'error',
                    title: 'Xatolik Yuzberdi',
                }));
        }
    }

    return (
        <Container>
            <section className="curs-form">
                {/* <img className="curs-form__img" src="https://thumbs.gfycat.com/SeveralConsciousFairybluebird-max-1mb.gif" alt="" /> */}
                <h3 className="curs-form__title">Murojaat Yuborish</h3>
                <form className="curs-form__form">
                    <Select
                        defaultValue="Tuman"
                        style={{ width: '100%', marginBottom: '15px', }}
                        onChange={handleChange}
                        options={
                            data?.map((item) => {
                                return (
                                    {
                                        value: item?.id,
                                        label: item?.name,
                                    }
                                )
                            })
                        }
                    />
                        {/* const [cityId, setCityId] = useState()
    const [userName, setUserName] = useState('');
    const [userTell, setUserTell] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userMap, setUserMat] = useState('');
    const [userComment, setUserComment] = useState(''); */}

                    <Input placeholder="Ism Sharf" style={{ width: '100%', marginBottom: '15px', padding: '8px 10px' }} value={userName} onChange={(e) => setUserName(e.target.value)} />
                    <Input placeholder="Telfon nomer" style={{ width: '100%', marginBottom: '15px', padding: '8px 10px' }} value={userTell} onChange={(e) => setUserTell(e.target.value)} />
                    <Input placeholder="Email" style={{ width: '100%', marginBottom: '15px', padding: '8px 10px' }} value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                    <Input placeholder="Hozirgi Manziliz" style={{ width: '100%', marginBottom: '15px', padding: '8px 10px' }} value={userMap} onChange={(e) => setUserMap(e.target.value)} />
                    <textarea className="form-curs__textarea" cols="20" rows="7" placeholder="Mavzu" value={userComment} onChange={(e) => setUserComment(e.target.value)}></textarea>

                    <div className="curs-form__sub-btn">
                        <button className="curs-form__btn" onClick={(e) => onSubmit(e)}>Jo'natish</button>
                    </div>
                </form>
            </section>
        </Container>
    )
}

export default Form