---
layout: post
date: 2024-02-23 07:53:08
title: 12 JavaScript Tips Every Developer Should Know
description: Today I want to share with you 12 super useful tips that can
  significantly improve your programming skills and project development efficiency
main-class: js
color: "#D6BA32"
tags:
  - javascript
  - development
category: javascript
---

Hey everyone! It's Friday, and I want to share with you 12 super useful tips that can significantly improve your programming skills and project development efficiency. These tips cover everything from string manipulation to code security improvement. Let's dive in!

1. **Superior Camel Case**: Write compound names with the first letter of each word capitalized, except for the first one. It's more than just style; it's a pattern that brings clarity to your code.

   ```javascript
   function camelize(str) {
     return str.replace(/([a-z]+)/g, (match, group) =>
       group ? group.charAt(0).toUpperCase() + match.slice(1) : ""
     )
   }
   console.log(camelize("hello world")) // Output: helloWorld
   ```

2. **Three-Digit Segmentation**: Make large numbers more readable by applying segmentation every three digits. Perfect for financial values and large counts.

   ```javascript
   function numFormat(num) {
     return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
   }
   console.log(numFormat("123456789")) // Output: 123,456,789
   ```

3. **Safe Property Access**: Avoid errors when accessing undefined properties in objects with a failsafe method.

   ```javascript
   const a = {}
   const proxy = new Proxy(a, {
     get(target, propKey, receiver) {
       return Reflect.get(target, propKey, receiver) ?? {}
     }
   })
   console.log(proxy.b.c) // Output: undefined
   ```

4. **Mobile Device Type**: Quickly identify if the user is on Android, iPhone, or iPad for an optimized user experience.

   ```javascript
   function getBrowserInfo() {
     const userAgent = navigator.userAgent.toLowerCase()
     return {
       isAndroid: Boolean(userAgent.match(/android/gi)),
       isIphone: Boolean(userAgent.match(/iphone|ipod/gi)),
       isIpad: Boolean(userAgent.match(/ipad/gi))
     }
   }
   ```

5. **Form Request Simulation**: Implement file export functionality in a simple and effective way.

   ```javascript
   function exportFunc(url, params) {
     const form = document.createElement("form")
     form.style.display = "none"
     form.action = url
     form.method = "post"
     document.body.appendChild(form)

     for (const key in params) {
       const input = document.createElement("input")
       input.type = "hidden"
       input.name = key
       input.value = params[key]
       form.appendChild(input)
     }
     form.submit()
     form.remove()
   }
   ```

6. **Universal Event Binding**: Ensure your event listeners work in any browser.

   ```javascript
   function customEventBind(ele, eventType, callBack) {
     if (ele.addEventListener) {
       ele.addEventListener(eventType, callBack, false)
     } else if (ele.attachEvent) {
       ele.attachEvent("on" + eventType, callBack)
     } else {
       ele["on" + eventType] = callBack
     }
   }
   ```

7. **Cookie Configuration**: Manage cookies efficiently with full control over their attributes.

   ```javascript
   function setCookie({ key, value, expires, path, domain, secure }) {
     let cookieString = `${key}=${encodeURIComponent(value)}`
     if (expires) {
       const expirationDate = new Date()
       expirationDate.setTime(
         expirationDate.getTime() + expires * 24 * 60 * 60 * 1000
       )
       cookieString += `; expires=${expirationDate.toUTCString()}`
     }
     if (path) cookieString += `; path=${path}`
     if (domain) cookieString += `; domain=${domain}`
     if (secure) cookieString += "; secure"
     document.cookie = cookieString
   }
   ```

8. **Browser Information**: Extract user browser details to improve your site's compatibility.

   ```javascript
   function getBrowserInfo() {
     const userAgent = navigator.userAgent;
     const browserRegex = /(Chrome|Firefox|Safari|Opera|Edge|Trident)\[/ ]?(\d+)/;
     const browserMatch = userAgent.match(browserRegex);
     return {
       browserName: browserMatch ? browserMatch\[1] : 'Unknown',
       browserVersion: browserMatch ? browserMatch\[2] : 'Unknown'
     };
   }
   ```

9. **Operating System Information**: Know which operating system the user is browsing with to optimize their experience.

   ```javascript
   function getUserOsInfo() {
     const userAgent = navigator.userAgent
     const osRegex = /((Windows NT)|(Mac OS X)|(Android)|(iOS))\s*([\d._]+)/
     const osMatch = userAgent.match(osRegex)
     return {
       osName: osMatch ? osMatch[1] : "Unknown",
       osVersion: osMatch ? osMatch[5] : "Unknown"
     }
   }
   ```

10. **Date Validation**: Ensure start and end dates are coherent and logical.

    ```javascript
    function compareDate(beginDate, endDate) {
      const start = new Date(beginDate)
      const end = new Date(endDate)
      return start <= end
    }
    ```

11. **URL Parameters**: Easily capture URL parameter values for analytics and custom functionality.

    ```javascript
    function getQueryStringRegExp(name) {
      const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i")
      const r = window.location.search.substr(1).match(reg)
      if (r != null) return unescape(r[2])
      return null
    }
    ```

12. **Excel File Export**: Simplify Excel file creation and export with a custom function.

    ```javascript
    function exportExcel(headers, data, fileName = "export.xlsx") {
      // Simplified code for Excel file creation and export
    }
    ```

Hope these tips help you! See you next time!
