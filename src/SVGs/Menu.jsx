import React from 'react'

const Menu = ({color="#2F2F2F",hover=false}) => {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.83646 1.42015e-07H6.62188C7.24813 -5.06632e-06 7.75323 -1.04405e-05 8.16437 0.0280416C8.58708 0.0568854 8.96094 0.117693 9.3149 0.264307C10.1657 0.616719 10.8416 1.29266 11.194 2.14344C11.3406 2.4974 11.4015 2.87125 11.4303 3.29396C11.4583 3.7051 11.4583 4.21021 11.4583 4.83646V6.62188C11.4583 7.24813 11.4583 7.75328 11.4303 8.16437C11.4015 8.58708 11.3406 8.96094 11.194 9.3149C10.8416 10.1657 10.1657 10.8416 9.3149 11.194C8.96094 11.3406 8.58708 11.4015 8.16437 11.4303C7.75323 11.4583 7.24813 11.4583 6.62188 11.4583H4.83646C4.21021 11.4583 3.7051 11.4583 3.29396 11.4303C2.87125 11.4015 2.4974 11.3406 2.14344 11.194C1.29266 10.8416 0.616719 10.1657 0.264307 9.3149C0.117693 8.96094 0.0568854 8.58708 0.0280416 8.16437C-1.04405e-05 7.75323 -5.06632e-06 7.24813 1.42015e-07 6.62188V4.83646C-5.06632e-06 4.21021 -1.04405e-05 3.7051 0.0280416 3.29396C0.0568854 2.87125 0.117693 2.4974 0.264307 2.14344C0.616719 1.29266 1.29266 0.616719 2.14344 0.264307C2.4974 0.117693 2.87125 0.0568854 3.29396 0.0280416C3.7051 -1.04405e-05 4.21021 -5.06632e-06 4.83646 1.42015e-07ZM3.38849 1.4137C3.03646 1.43771 2.83146 1.48266 2.67495 1.54745C2.16448 1.75891 1.75891 2.16448 1.54745 2.67495C1.48266 2.83146 1.43771 3.03646 1.4137 3.38849C1.38927 3.74677 1.38891 4.20448 1.38891 4.86109V6.59724C1.38891 7.25385 1.38927 7.71156 1.4137 8.06984C1.43771 8.42188 1.48266 8.62687 1.54745 8.78339C1.75891 9.29385 2.16448 9.69943 2.67495 9.91088C2.83146 9.97568 3.03646 10.0206 3.38849 10.0446C3.74677 10.0691 4.20448 10.0694 4.86109 10.0694H6.59724C7.25385 10.0694 7.71156 10.0691 8.06984 10.0446C8.42188 10.0206 8.62687 9.97568 8.78339 9.91088C9.29385 9.69943 9.69943 9.29385 9.91088 8.78339C9.97568 8.62687 10.0206 8.42188 10.0446 8.06984C10.0691 7.71156 10.0694 7.25385 10.0694 6.59724V4.86109C10.0694 4.20448 10.0691 3.74677 10.0446 3.38849C10.0206 3.03646 9.97568 2.83146 9.91088 2.67495C9.69943 2.16448 9.29385 1.75891 8.78339 1.54745C8.62687 1.48266 8.42188 1.43771 8.06984 1.4137C7.71156 1.38927 7.25385 1.38891 6.59724 1.38891H4.86109C4.20448 1.38891 3.74677 1.38927 3.38849 1.4137ZM4.83646 13.5417H6.62188C7.24813 13.5417 7.75323 13.5417 8.16437 13.5697C8.58708 13.5985 8.96094 13.6594 9.3149 13.806C10.1657 14.1584 10.8416 14.8343 11.194 15.6851C11.3406 16.0391 11.4015 16.4129 11.4303 16.8356C11.4583 17.2468 11.4583 17.7519 11.4583 18.3781V20.1635C11.4583 20.7898 11.4583 21.2949 11.4303 21.706C11.4015 22.1287 11.3406 22.5026 11.194 22.8566C10.8416 23.7073 10.1657 24.3833 9.3149 24.7357C8.96094 24.8823 8.58708 24.9431 8.16437 24.972C7.75323 25 7.24813 25 6.62188 25H4.83646C4.21021 25 3.7051 25 3.29396 24.972C2.87125 24.9431 2.4974 24.8823 2.14344 24.7357C1.29266 24.3833 0.616719 23.7073 0.264307 22.8566C0.117693 22.5026 0.0568854 22.1287 0.0280416 21.706C-1.04405e-05 21.2949 -5.06632e-06 20.7898 1.42015e-07 20.1635V18.3781C-5.06632e-06 17.7519 -1.04405e-05 17.2468 0.0280416 16.8356C0.0568854 16.4129 0.117693 16.0391 0.264307 15.6851C0.616719 14.8343 1.29266 14.1584 2.14344 13.806C2.4974 13.6594 2.87125 13.5985 3.29396 13.5697C3.7051 13.5417 4.21021 13.5417 4.83646 13.5417ZM3.38849 14.9554C3.03646 14.9794 2.83146 15.0243 2.67495 15.0891C2.16448 15.3006 1.75891 15.7061 1.54745 16.2166C1.48266 16.3731 1.43771 16.5781 1.4137 16.9302C1.38927 17.2884 1.38891 17.7461 1.38891 18.4028V20.1389C1.38891 20.7955 1.38927 21.2532 1.4137 21.6115C1.43771 21.9635 1.48266 22.1685 1.54745 22.3251C1.75891 22.8355 2.16448 23.2411 2.67495 23.4526C2.83146 23.5173 3.03646 23.5623 3.38849 23.5863C3.74677 23.6107 4.20448 23.6111 4.86109 23.6111H6.59724C7.25385 23.6111 7.71156 23.6107 8.06984 23.5863C8.42188 23.5623 8.62687 23.5173 8.78339 23.4526C9.29385 23.2411 9.69943 22.8355 9.91088 22.3251C9.97568 22.1685 10.0206 21.9635 10.0446 21.6115C10.0691 21.2532 10.0694 20.7955 10.0694 20.1389V18.4028C10.0694 17.7461 10.0691 17.2884 10.0446 16.9302C10.0206 16.5781 9.97568 16.3731 9.91088 16.2166C9.69943 15.7061 9.29385 15.3006 8.78339 15.0891C8.62687 15.0243 8.42188 14.9794 8.06984 14.9554C7.71156 14.9309 7.25385 14.9306 6.59724 14.9306H4.86109C4.20448 14.9306 3.74677 14.9309 3.38849 14.9554ZM18.3781 1.42015e-07H20.1635C20.7898 -5.06632e-06 21.2949 -1.04405e-05 21.706 0.0280416C22.1287 0.0568854 22.5026 0.117693 22.8566 0.264307C23.7073 0.616719 24.3833 1.29266 24.7357 2.14344C24.8823 2.4974 24.9431 2.87125 24.972 3.29396C25 3.7051 25 4.21021 25 4.83646V6.62188C25 7.24813 25 7.75328 24.972 8.16437C24.9431 8.58708 24.8823 8.96094 24.7357 9.3149C24.3833 10.1657 23.7073 10.8416 22.8566 11.194C22.5026 11.3406 22.1287 11.4015 21.706 11.4303C21.2949 11.4583 20.7898 11.4583 20.1635 11.4583H18.3781C17.7519 11.4583 17.2468 11.4583 16.8356 11.4303C16.4129 11.4015 16.0391 11.3406 15.6851 11.194C14.8343 10.8416 14.1584 10.1657 13.806 9.3149C13.6594 8.96094 13.5985 8.58708 13.5697 8.16437C13.5417 7.75323 13.5417 7.24813 13.5417 6.62188V4.83646C13.5417 4.21021 13.5417 3.7051 13.5697 3.29396C13.5985 2.87125 13.6594 2.4974 13.806 2.14344C14.1584 1.29266 14.8343 0.616719 15.6851 0.264307C16.0391 0.117693 16.4129 0.0568854 16.8356 0.0280416C17.2468 -1.04405e-05 17.7519 -5.06632e-06 18.3781 1.42015e-07ZM16.9302 1.4137C16.5781 1.43771 16.3731 1.48266 16.2166 1.54745C15.7061 1.75891 15.3006 2.16448 15.0891 2.67495C15.0243 2.83146 14.9794 3.03646 14.9554 3.38849C14.9309 3.74677 14.9306 4.20448 14.9306 4.86109V6.59724C14.9306 7.25385 14.9309 7.71156 14.9554 8.06984C14.9794 8.42188 15.0243 8.62687 15.0891 8.78339C15.3006 9.29385 15.7061 9.69943 16.2166 9.91088C16.3731 9.97568 16.5781 10.0206 16.9302 10.0446C17.2884 10.0691 17.7461 10.0694 18.4028 10.0694H20.1389C20.7955 10.0694 21.2532 10.0691 21.6115 10.0446C21.9635 10.0206 22.1685 9.97568 22.3251 9.91088C22.8355 9.69943 23.2411 9.29385 23.4526 8.78339C23.5173 8.62687 23.5623 8.42188 23.5863 8.06984C23.6107 7.71156 23.6111 7.25385 23.6111 6.59724V4.86109C23.6111 4.20448 23.6107 3.74677 23.5863 3.38849C23.5623 3.03646 23.5173 2.83146 23.4526 2.67495C23.2411 2.16448 22.8355 1.75891 22.3251 1.54745C22.1685 1.48266 21.9635 1.43771 21.6115 1.4137C21.2532 1.38927 20.7955 1.38891 20.1389 1.38891H18.4028C17.7461 1.38891 17.2884 1.38927 16.9302 1.4137ZM18.3781 13.5417H20.1635C20.7898 13.5417 21.2949 13.5417 21.706 13.5697C22.1287 13.5985 22.5026 13.6594 22.8566 13.806C23.7073 14.1584 24.3833 14.8343 24.7357 15.6851C24.8823 16.0391 24.9431 16.4129 24.972 16.8356C25 17.2468 25 17.7519 25 18.3781V20.1635C25 20.7898 25 21.2949 24.972 21.706C24.9431 22.1287 24.8823 22.5026 24.7357 22.8566C24.3833 23.7073 23.7073 24.3833 22.8566 24.7357C22.5026 24.8823 22.1287 24.9431 21.706 24.972C21.2949 25 20.7898 25 20.1635 25H18.3781C17.7519 25 17.2468 25 16.8356 24.972C16.4129 24.9431 16.0391 24.8823 15.6851 24.7357C14.8343 24.3833 14.1584 23.7073 13.806 22.8566C13.6594 22.5026 13.5985 22.1287 13.5697 21.706C13.5417 21.2949 13.5417 20.7898 13.5417 20.1635V18.3781C13.5417 17.7519 13.5417 17.2468 13.5697 16.8356C13.5985 16.4129 13.6594 16.0391 13.806 15.6851C14.1584 14.8343 14.8343 14.1584 15.6851 13.806C16.0391 13.6594 16.4129 13.5985 16.8356 13.5697C17.2468 13.5417 17.7519 13.5417 18.3781 13.5417ZM16.9302 14.9554C16.5781 14.9794 16.3731 15.0243 16.2166 15.0891C15.7061 15.3006 15.3006 15.7061 15.0891 16.2166C15.0243 16.3731 14.9794 16.5781 14.9554 16.9302C14.9309 17.2884 14.9306 17.7461 14.9306 18.4028V20.1389C14.9306 20.7955 14.9309 21.2532 14.9554 21.6115C14.9794 21.9635 15.0243 22.1685 15.0891 22.3251C15.3006 22.8355 15.7061 23.2411 16.2166 23.4526C16.3731 23.5173 16.5781 23.5623 16.9302 23.5863C17.2884 23.6107 17.7461 23.6111 18.4028 23.6111H20.1389C20.7955 23.6111 21.2532 23.6107 21.6115 23.5863C21.9635 23.5623 22.1685 23.5173 22.3251 23.4526C22.8355 23.2411 23.2411 22.8355 23.4526 22.3251C23.5173 22.1685 23.5623 21.9635 23.5863 21.6115C23.6107 21.2532 23.6111 20.7955 23.6111 20.1389V18.4028C23.6111 17.7461 23.6107 17.2884 23.5863 16.9302C23.5623 16.5781 23.5173 16.3731 23.4526 16.2166C23.2411 15.7061 22.8355 15.3006 22.3251 15.0891C22.1685 15.0243 21.9635 14.9794 21.6115 14.9554C21.2532 14.9309 20.7955 14.9306 20.1389 14.9306H18.4028C17.7461 14.9306 17.2884 14.9309 16.9302 14.9554Z" fill={color} fill-opacity={!hover ? "0.53" : "null"}/>
    </svg>
    
  )
}

export default Menu