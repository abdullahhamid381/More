import React from 'react'

const Notification = ({color="#2F2F2F",hover=false}) => {
  return (
    <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8008 18.7935C11.3566 18.8097 11.9024 18.9431 12.4006 19.1847H12.4306C12.8469 19.5189 12.9176 20.1155 12.5906 20.534C11.9951 21.3727 11.0424 21.9015 10.0009 21.9714C8.93077 22.097 7.85314 21.8055 7.00122 21.1598C6.56309 20.8641 6.27836 20.3965 6.22131 19.8789C6.22131 19.3313 6.74125 19.0771 7.22119 18.9695C7.78334 18.853 8.35636 18.794 8.931 18.7935H10.8008ZM9.54093 0C13.0005 0 16.5701 2.46408 16.9401 6.0331C17.0001 6.76645 16.9401 7.52915 17.0001 8.27228C17.1964 9.23062 17.6483 10.1212 18.3099 10.8537C18.7213 11.4557 18.9596 12.1548 18.9999 12.8778V13.1027C19.006 14.0782 18.6508 15.023 18 15.7623C17.175 16.6304 16.0558 17.176 14.8503 17.2975C11.2888 17.7472 7.68302 17.7472 4.12155 17.2975C2.90191 17.1852 1.76689 16.6389 0.931911 15.7623C0.30146 15.0159 -0.0291406 14.0703 0.00201772 13.1027V12.8778C0.0410377 12.1575 0.271985 11.4597 0.671941 10.8537C1.33654 10.1205 1.79481 9.23094 2.00179 8.27228C2.06178 7.52915 2.00179 6.77623 2.06178 6.0331C2.44174 2.46408 5.94134 0 9.44094 0H9.54093Z" fill={color} fill-opacity={!hover ? "0.53" : "null"}/>
</svg>

  )
}

export default Notification