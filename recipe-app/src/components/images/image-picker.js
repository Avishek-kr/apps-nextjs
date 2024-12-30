'use client';

import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({ label, name }) {
    const [pickedImage, setPickedImage] = useState();
    const ImageInput = useRef();

    function handleImageBtnClick() {
        ImageInput.current.click();
    }

    function handleImageChange(e) {
        const file = e.target.files[0];
        if(!file) {
            setPickedImage(null);
            return;
        };

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        }

        fileReader.readAsDataURL(file);
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                    {pickedImage && (
                        <div className={classes.preview}>
                            <Image src={pickedImage} alt="Image picked by user" fill />
                        </div>
                    )}
                <input 
                className={classes.input}
                type="file"
                name={name}
                id={name}
                accept="image/png, image/jpeg"
                ref={ImageInput}
                onChange={handleImageChange}
                required
                />
                <button type='button' className={classes.button} onClick={handleImageBtnClick}>Pick and Image</button>
            </div>
        </div>
    )
}