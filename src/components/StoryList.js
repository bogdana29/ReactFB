import React from 'react'
import './StoryList.css'
import Story from './Story'
function StoryList() {
    return (
        <div className="storyList">
            <Story
                image = "https://i.pinimg.com/564x/db/1c/c9/db1cc92dba404432c6fd0defedae4178.jpg"
                profileSrc="https://ro.pinterest.com/pin/735634920353387873/"
                title ="Bogdana29"
            />
           <Story
                image = "https://i.pinimg.com/564x/15/2d/bb/152dbba151303d7add1f7c91e72076a5.jpg"
                
                profileSrc="https://ro.pinterest.com/pin/788341109756810468/"
                title ="Mos Craciun"
            />
            <Story
                image = "https://cdn.pixabay.com/photo/2017/07/11/07/47/wallpaper-2492689__340.jpg"
                profileSrc="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fro%2Fillustrations%2Fsearch%2Fimaginea%2520de%2520pe%2520ecran%2F&psig=AOvVaw3vakx6UxTfEFZNi8Gio3f_&ust=1604150149048000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLC6lZez3OwCFQAAAAAdAAAAABAT"
                title ="IonIonescu de l abrad"
            />
            <Story
                image = ""
                profileSrc=""
                title ="Foicica"
            />
            <Story
                image = ""
                profileSrc=""
                title ="utiml"
            />
        </div>
    )
}

export default StoryList
