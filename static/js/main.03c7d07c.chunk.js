(this["webpackJsonpmini-youtube"]=this["webpackJsonpmini-youtube"]||[]).push([[0],{30:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(12),s=n(21),a=n.n(s),o=(n(30),n(5)),r=n(22),j=n.n(r),d=(n(51),n(1));function A(e){return Object(d.jsxs)("div",{className:"searched-video",children:[Object(d.jsx)(j.a,{width:"100%",height:"65em",controls:!0,playing:!0,url:"https://youtu.be/".concat(e.video.vid),onEnded:e.endHandler,onReady:e.readyHandler,className:"video-player",id:"video-player"}),Object(d.jsx)("h3",{className:"video-title",children:e.video.title}),Object(d.jsxs)("p",{className:"date",children:[Object(d.jsx)("span",{}),e.video.publishedAt]}),e.video.desc&&e.video.desc.length>500?Object(d.jsx)("p",{className:"description",children:e.video.desc.slice(0,500)+"..."}):Object(d.jsx)("p",{className:"description",children:e.video.desc})]})}n(53),n(54);function l(e){var t=Object(d.jsx)("div",{className:"loading"});return e.isLoading&&(t=Object(d.jsx)("div",{className:"loading animation"})),Object(d.jsxs)("div",{className:"main-header",children:[Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("div",{className:"logo",children:Object(d.jsx)("a",{href:"/MyTube",children:Object(d.jsx)("img",{className:"logo-img",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAU4AAABYCAYAAACaqx5bAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAFxdJREFUeNrtnXmUXFWdx7/fV1tnBTQB0+l0V3e1sgzihiwqMKxGcJnhOIGgrKMIBHKQNuqMIyFuMzHpjCaNwiAyotIdHHBYBnEiYoDBdRxcwBmp6qrqTgKRiCSEhnpVdb/zR9Kxk3R1162uqlfpvp9zknPqvbt8763UN/e9e+/vAg6Hw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA6HY/LBoAU4JgcCQs9h7jSD2dPzMcxW0cyD5zUbcj6MmkE0g5wnqZnkTEjTADQJDJPYBOmxsEx3Sz79q6DbMlE2I7GgCdz+aiR3BK3FURuccU5h0tH4EUTo70WcQmEOyOmBChIKEK6M55NfC7pvbHkeHQftiLIL5GUA5u9uUEbCRk98yOQL97Uj80LQOh3VwRnnFCUTS7wLwt0gm4LWsj/mnHiu/4GgVZTLIFpeVYjGHiZ5TKk0EnxCD3jGrGktpB8NWrNjYjjjnIJsRkerH/V+Q2J20FpGR8/OyG1/3VxsezFoJeWQiSXWArym7NYBGz3hqjY/+VTQ2h2V4QUtoFqsWXPntKA1NJKOsfCj/GzjmiYA8DVDsdmXBa2ibMQLrFoHnGKAJzKRzg8FLd1RGZPGOIuR4vGre/puXr784XBQGrp7ej9hIsULg+6LsdiK9sMALg5ax3gYcUnQGspFQMQ2D4kIPNySjnVcG7R+hz2TxjgBgMDls+ZsvX/lrffMqme9y5c/HO5e1/svAP8JDd6nr0S9i0n7H3q9IfnawViiM2gd5cqtOKO4enOs/fCgG+Cwo6F/5JVA4p2hl4ceW7n2rpZ61Lfy1ntmzZqz9X6QHw667eVggA8EraFcCkZnBK2h5pChvLwD5jtx7GLSGScAEDwmRP+nX7zxzjfWsp6Va+9qCb089BiJdwbd5nIYRMurCLw+aB3lQg9HB62hLJ0Tn2SNB90Ghx2T0jgBgGRzSObR7p71Z9ei/O61vW8K0f8pUXoJSqOhaNNJIA+YlRSCN+kf1XfnfiHoBjjsmLTGuZuZgO7t7um7spqFrlrbew48PkKyOegG2mCgA2IENwyFtqA11AMP/EHQGhx2THbjBIAQgK+s7ulbvXz58gm3d/W6vqs8j/cAmBl0w2wR8LqgNVjBA6WPVfmIU/rmglzyvqBb4LBjKhgnAIBA16w5R36n0nWWy5cv91b39K0mcSN2mfEBB8nW4GrXs5CG7LJoRnB6rajAOJWh0cVxP3URAQXdAIcdU8Y4AYDEuSZafHjVV+8+1CbfmjV3Tps158jvEOgKug0TQppTflr8D40uYdGchKLeDpn3QyjYVknopmhuaG48l5oX9V+eC2PWWORu+GVTe5ppgaTb23KpzrZ86vaghTsqY0oZJwAQPJ4F/yer191xRDnpV3317kNNtPgwiXOD1j7xxrOsEZyk7WEf723Lp77RVuh/LF5IPR73++8SULSuU3y2GVu2AUAztgzF8/1dkPrK06ttQXdZLfDAflbSl46GIbBdNkFCol3g46vW9Z677JrFPyqVbvW6O45AwX+AZHu16u6+se8jEG4aL50EPxTW4R+9cnFmr/zr+v4GxJ3l1GU884ZlV13w6xGFDqGMSfUQ8JEWJDeN1nXV6AP6+atMLHIawbFH/uIvqlFfrZHlUgUD+EFrdkyMKTfiHIbgIQS/v7qnd9QtkqvW9f4l4f2YRNVMEwBQRJnxJpXf1zQBwITxu3Kr2rl13j5BJDhu3YRuavVT66va5n1ow8CfKF01rhaab9RSRxWx+g/FgzFBC3ZMjCk54hyGRBTg7d03ru/oWnLeiuHrq3t6L4T4NRDRoDVWE8/gdhPCGAEp9L3WHK8do4iqrQGN+/13ZWOJmwReUUpLW67//mB6ypoDZm1suaQRP5jR0KmQ3gHyCACtIGYKCFHcCWozwKcpPC4//1Ac2WeC1lxPprRx7kG6oXtdX8eOw7wPz35Ofwfphsn3UwBaC8nvp0OJmwl+ZP8+wP1tPt9PJHN105NLXZONJmaA3GvUL+G+mf72ktsQM2hrVyz8CQALIb6GxGZIvTP87SttQ9EJ4DNonuahSAA4DFvzAPK1nunOoG0eIpFzRJwF6BiA8wjNEDhE6o8Cf+8Jv4Qp/rC1kP4RgXwt9QwzEG4/y3jeFQLfDSKy76sd/vmvIwGcIeJKRMMmw8RGFfHF9kLqwXroDBpnnMMQF83eWjwT5LygpdSS9lzqioFo5/cMdJ7ABIkhGPxbWz5503gTFlXYWrhveQX4qYuy0c5/MjLHA1SY+u8Ffv9vSuVJRxPnA7iN2B2AeZeiDpCfeil68F+n/ZmntyPz7Gh5BXiD0c73CPorA76JQCILzRj5ijKLXfFh0sKLJLYB+j9KP4r5vO01SP2hGv0ieMsQ5T+Cw7bEPSURmAVwFoG4iLMQCn0yG+rcljX4VjivNfORGqzmdzDMQKTjrYb8siFPHKmovC+SHoBTGcKpaS/x85Dhp1sLye/XQmej4IxzJJPcNIdp9ZP3ALgnaB3D7A7oO25Q34Fo5/sMdEfJuRjiKMZCdyCH0/bLiwXN2Wj0PhBv3m1QezKNWhQxC7tMrF3kwleiWDagjoWt+f5RJqxk553Eqy2taY48XOtHuSSrzhun51+4vlpBngWEMtHEFwzQBXLC65NJvtWE8GCGHWva8v2frNdIud5M2ckhRyVMYIfMBBmMJTqL0DfGn8DmqZlwYj/jNLHoepBvrlgA8eoieWvJu3WAREQert0ZO+jJdKTzhImW9zw6DsrGEv9J8uPVMM298LzrstHExi1oLn/t8AGEM05HwyMgVBD/jeRBZWUg9grssinW8TqA75ioDpLHZKOdfxF0fxBcAOKRbLTzg5WWkUb84O1RbgB4WqVljC+UJ/rR6fcNoqXhT0WwxRmno+HJRjouJvGGctOLmDvyc148qmpipGNHuVr3kTiJiKDbM5HOv7VuAhBmLHQ3ybfWXihOKESb+jTJvGZSNcZRc+puEEJnTB5vsMnjQZtHfg6B1ZshJ18e5VowrzBIgro5HU4stMmWiSRWAzy1fjLx3kyk4yMTL6lxcMbpaGgyEXMpwQU2eYy8e0d+FpCsoqQng+6TvSBD9HDHIFrml5M8E06cRmJp/WV6nxtEy6vq30G1wRmnw4b6j6zoXWKTXNLT7fnkT0Zea/OTT0r42USlSPp1m59sLOMEAPKQQqzp6+PqB8Ly8JVARsjEqwqR2PJA+qcGTEnjlHC3ZZaHIRelu94MxjpeS+J4u1y8bbSrHnApgIqDhkjaHpL2e5+oBtk1ROCsbKzj3WOlyUQ6PkQysIPhSB44Rz6Pw5Q0zuL0aZcI+kI5aQV8e8eh3kJAddtR07DUeaRi5FmdVw4A8Au9o11u85NPIZc/TlIF61eVidIcP/oazsYwTgAwYsl/0wI8et7HAhV4wASmHp8paZwzX8npY1cv/hSMLteYMSb1j11LzrtwxaJFLppNAIi2p1wq2Y5MptTdOLJp+MUrLAoEANDw+vm59P8F3R/j6iRfPxDuHPXgwGys410AEtaFSgbCbV6xePKM3Auzo7mhGRT+AsKnAD1rXd4kYUoa5zBdSxff4nnmPQB2jrwuoQCjy7uuXvz3ZBVnZB1lM4iWaRKPs8kj4IfjpZmJnS/Zagl7xbHej1Y84hT0KGU+CZkPetL5hJZCuEPCjkrLNJ4uH70y73x7gRqiMQvjfvKy1kL60bnY9mIztgy1+cmn4n7yC17OfwuEP1aq9UBmShsnAFy35IIHi/ROkrRl96WdAN7btXTxLUFrm8oUw7ETaRmdyjN4fLw0c7BtJySrsG4ml39ujNuVGad0fXsudXKb378y7vd/u9VPrW/LpdbF/eQHIv7LHZIqjQ5/9nOYM2uvqgBP0HtsC6JwXVshvaHU/VYMboEwJaPYT3njBICPL1n0BD2cIGgDjE7+2DXnfy9oTY1G3SdBQniLbRYPxf8dLw0BCdxZTnnDxJAb61VNJf2yqc1Pfb7UzRZs/mO7n7pY0M3WJZNNQ7FZf7lXZdH2o8vedbUbQX9ozafGnaknVHZ82MmEC/Kxm64liwcBnBW0Dscw9rO/Jm9+X1bJ1BDA2YE1TdhAYNxRbziX+2gx1nQmgA6rflDo7QD2nJxZVOg4W3sn8Mtn0BwRthRKhdhLI95kPLylYWbH6ogzTke51Pn3ocOtqpSG2jDwp7KSAr5NYzh2cBPrfhHwdDnpFmDTy2l09hCwOOAOAPHGvT4SCfsX9Vzox6a/lEUnMtZ5Jz/uUd3RoNBqlAWWP6FC0OqgNA8Hj2GOnfb/ociUZfAAEM2Zu+zL117HvQgI8FjoyYkzTke51HfEKR1smcPmvaXV5NAOFEr+TjIoWPeLh1H2u5dgPvoHBDxXbnoAILjv9svgXktMUpxxOhoOAWGQ0y3zWJzBLqvYkxHkqxqrUpRVcF8Km23SA5q+12QeZdWXjvFxxukol7qNOLdhjn38RvEQi6ZYmCwQQbTkXEC4ghGnQKsRryxeQ+xqHplBPDaivkaJwp4KWkC1cMZZZwivrB8NS2xvDBW8ST+JOQfbrLe3kphdbvQdQVbGmUOh5IgzBGP9fYRsD4ITYlbpAcSR2bOEilLZrwZqCWGuDVpDtXDGWW9CeL7MlNO7e/pet+9FeUXr9Y0HGgR8CdbbXE04+qayEspuTWMRoZIL8YdPx6xpfxCHWmWQXtlruRPt3pHWpA3QTQfQcc/j4pYj1Zni0CvPeNPK3hDz76tv7Pu8V+RWAJBnDpfw2YCGnHWtltQWgHGrTB5OB/DQWEmeQefcHO1GcIxqmr2NV4fn0XHQDikOm/gq5N7vRIVswKFIvtKaS10dqIIq40acdWbZsoteAtRfZvIjKXxLnjbI0waAPYTNu7wDF4EDtnkM+UEBY07k5GLG/rgIRZpK3fIqeFS3YXsUZ9tHpVJm5CfCBBOgRHiKRXNmPJdcUutz6uuNM85A4L0TL6P+outbmX5tn4cLBiKJsc/gESsJdlFysooVnPwplb88iOQSa70GT4z8GPHxc+syKkHYCenHNPiSVyyeElLhMlMwv61L3XXGGWcAGKgvaA2Njgz+u5J8hvhiOhJ/42j3BiIdxwo8z7ZMorRxjr04vkTbyJPLSZeNJC4C+HZrveRPR35uRjoLYJNtORBeAsy7aXRsqT8yhTd5OXTGcji0zU/ObvNTpwh42oRCvUUv/BNGw4PpWOdHretucNw7zgBYdvXin3b39D0A7H2MbWNTwQ6ZCRDN46G89VwysCuYReiH2VhiuZfLfXsBNj2/Bc3T89HY2YZcR9hFXAIAhdA0VtRWe3RBNtp5b5uf/E6pFJlYx9lG/JcK1joV4Ps/2P+GuQfw7EavxAyInzH54jntyIwZe1NAJBPpuISe92kA7SPKCFPqHgi3/6K1kH60mr0YJM44A8KE8AmvgNNhOVExVZiP1GBanb+yORZ4D+QhAtYWY01r0+p80YdmTiR6Pcd8VDe0fnAjPUnr09HE+wH0AsX/jfj554im6fkYjoZwIcDFFSmmNo62Z98r6k4Tgv1jP/lmxsI/TyuxLO6n7tw3OEk22nmUoMVZ8lIC80uUQRPyrkcBZ1bS/42Ie1QPiGVXnv9bA1wZtI5yGYjo6EryiSrr9MXRMxv7sGr7QGLWRI/8kEIlly+9BL+yXUUkSS4i+V0y/LtCbNq2fIwDAB8AubhyrfjaaNdbC+lHIDxVYbEtJHuzscSmTCyxIR1NrM/EEg9lYolnRDwJ8h9QyjT/3OAzBmOJzkrb1Wg44wyQZdecfxtod2Z4EGRiiS5DjhskeFTESwfC7RWF65uZ3/EtCS8G3X5QJQOOFCNNbUHLG8GWuJ8qGRREMqsn2BHzAJ5BchHA0wC+xia3MajbWe61xhlnwHQtOW8FpQ9AaIjdHSMREEpHE/8KcLVtNPY9EGHjefeUOgtnLOZi24skvhl8P3Cs0faJQevbo9OYzxEoub0ynu+/fQKjzonr83BMUHVXG2ecDcB11yy+A54Oh/QtNNB6t0y083qSF0+4ILLJePpuJpx4m21WL5f7vKTtQfYDoZNLrg+lTgpS2x6kJ+P5/q+NlYRAMWRwFaRg/o0JWwOptwZMGuMkeFS5aXNFlJ0WAFauvatFKPdo0/J1jKRryeLBrmsWXyhE2gF8FMJ/SnoaI8OlCS8I+kMNum8/hM4YgeuqViA5DR7u34zEAptsrRjc4gmfqEebx9B+cDacOL7EveCNUyqGVPzbsUabwywoJDdS/HIgOg0fmnghjcGkDxgx2VhzY9/VEtaVk3bHc4dFVqw4taKFNAORjrcaz/tZJXnHxJg18Xx/l00WAczEEhuJAE1KWhX3Ux8feSmNeJyxcDowTX8WtyyeS5X9/lJAOBtLPAjw9PpJ1ONxP2W9JrVRmTQjTkd1kWAVCKNs6B1mnQVQJMcLAGyxzVtF9p/YCIeOCFDPMLfamCYAECjMyvFcSD+ui0Lh+QjNZYH0To1wxtlgdPf0Ll311bvtouHUArLs4x2sioWx3oMOAC1IbgrJLKzXq4pRlO/3jjNMU26kq1pxa1sueXklGV+N5I4Z/vZ3AnqwlgIlvOjJLJyfSwezX75GOONsIFb1rF8E8Mss5n7T3bM+0F1FJl98cteWu2oXzP+oNOsCv/83Yegdkqr3I5ReKCsZtd9ri5Z8+peC6j7hISG/6/E8+aFyTsssxVxse7EtlzpHwgqounujduv8lQec0Jrvr89e+TrijLNBWLn2rhbC3AQABA8F9B/dPb09N998317HHkiqy3fWjswrAnqqWqh0d1sh9V8TKWJBrv/pGf6OYyF8fWKzw3pWMhcIxROhsWOkSvCh4pf2vU6gAKO/G7cmo7UAvlJJjNFRtPwMKhxn+3heCgKm3U/eEFbxWAGPVKNMCM9D+nTcTx7X5icDW/5US9zkUAMgid09fT8gedooN7cC+CaIQQlHkrwIQFlnyExkcggABHjZWOImgB+eYAONiFviudRSonqRLTPhzhMR0vUAF1qI+S8Z3RrLv7K+GVuGACAdjR8BhO4l+dr9pSMH6JJ2P1UyMEsmmvjs7t0z+9dm9OX2fOpaABhEy3wTbbpa1CW2i8cFPELpS3E/9d1q9d9oZMMdp8vj1QDfDVpuyZZ+AbJ3Ru6FW+ZiW/AbF2qIM84GoHtd78dArqp2uRM1zmEy4cTbEMKlEN8haN6uQBqjIBUFDoEagrCdQBLA42HqOy25/t/Xqv8G0JkwMbwP0kkgjpZ4KKEZAnYSTIP6BQ0eM/nixnZkMqOVkUa8idFQF8grIBwCYBDEw1B+XdzP/m48Ddlwx+km5C2DdAJ3vQ/9LYE1owXyEBAaDLe/3XjeKQJfT+goEXMpzBYYIrRTwCCA31F81MvjwVYk63pezxY0z8lFp53hEacY8CgCCQgHAZomYCeJPwHYDOgJGO+JaL64YXcUpimBM86A6V7b9wYRP6t4Z84YVMs4HQ7H3rh3nAGy/LbbmkTcUQvTlPQS8KOKJw4cDkdpXFi5AJm9c9oq0G4XU7mQWLpixQpnnA5HDXCP6gGxumf9yYQ21qRw4faua86f+B5zh8MxKu5RPSBmRV74MaCVkqo6KhT0GPPeFUG3z+GYzLgRZ8B037j+VEjfxLiBYMdH0IZpDJ27ZMminRMty+FwlMaNOAOma8l5D9P3jhH0DVQYUk6CL+AzrYeG3uVM0+GoPW7E2UCs6rnzRE/mBhBnoozvRoIPar3H0GeuW7IoGbR+h2Oq4IyzAfnnr/bGTZHnAnibpGMIzgUxC9JLAjeB+LUn/SCs0L1Lly56Lmi9DofD4XA4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcDgcDofD4XAc+Pw/RwUPmwnsQpsAAAAYdEVYdEF1dGhvcgBPbmxpbmUgTG9nbyBNYWtlcm+NwBcAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDktMjBUMDQ6MzY6MzMtMDQ6MDCj0hrMAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA5LTIwVDA0OjM2OjMzLTA0OjAw0o+icAAAAER0RVh0RGVzYwBMb2dvIGNyZWF0ZWQgd2l0aCB3d3cub25saW5lbG9nb21ha2VyLmNvbSwgdGhlIGZyZWUgbG9nbyBtYWtlciGflt7xAAAAAElFTkSuQmCC",alt:"logo"})})}),Object(d.jsx)("div",{className:"nav-links hidden",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"/",className:"nav-link",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"/",className:"nav-link",children:"Contact"})})]})}),Object(d.jsx)("button",{className:"nav-btn-open",children:Object(d.jsx)("ion-icon",{name:"menu-sharp"})})]}),t]})}n(55);function h(e){return Object(d.jsxs)("div",{className:"videos",children:[Object(d.jsx)("header",{className:"video-list-header",children:e.videoAPI[0]&&Object(d.jsx)("p",{children:e.videoAPI[0].channelTitle})}),Object(d.jsx)("ol",{className:"video-list",children:e.videoAPI.map((function(t){return Object(d.jsxs)("li",{className:"video",onClick:function(){return window.scrollTo({top:0,behavior:"smooth"}),e.onClickTitle(t)},children:[Object(d.jsx)("img",{className:"video_image",src:t.imageURL,alt:"video_image"}),t.title]},t.id)}))})]})}n(56);function u(e){var t=Object(c.useState)(""),n=Object(o.a)(t,2),i=n[0],s=n[1],a=Object(c.useState)(!0),r=Object(o.a)(a,2),j=r[0],A=r[1],l=function(e){s(e.target.value),A(!0)},h=Object(d.jsx)("input",{className:"search-input",type:"text",onChange:l,placeholder:"Search Videos"});return j||(h=Object(d.jsx)("input",{className:"search-input error-input",type:"text",onChange:l,placeholder:"Search Videos"})),Object(d.jsx)("div",{className:"search-bar",children:Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),i?e.onSearch(i):A(!1)},className:"search-form-controls",children:[h,Object(d.jsx)("button",{type:"submit",className:"search-btn",children:Object(d.jsx)("ion-icon",{name:"search-outline"})})]})})}var b=n(2),O=n(23);function p(){var e=Object(c.useState)({}),t=Object(o.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(),a=Object(o.a)(s,2),r=a[0],j=a[1],u=Object(c.useState)(!0),p=Object(o.a)(u,2),m=p[0],x=p[1],v=Object(c.useState)(""),f=Object(o.a)(v,2),g=f[0],w=f[1],R=Object(b.g)(),B=new URLSearchParams(R.search).get("query");Object(O.useEffect)((function(){!function(e,t){var n="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=".concat(e,"&type=video&key=").concat(t);fetch(n).then((function(e){if(!e.ok)throw new Error("".concat(e.status," Videos not Found "));return e.json()})).then((function(e){var t=e.items.map((function(e){return{id:Math.random().toString(),title:e.snippet.title,desc:e.snippet.description,vid:e.id.videoId,publishedAt:e.snippet.publishedAt,channelTitle:e.snippet.channelTitle,imageURL:e.snippet.thumbnails.default.url}}));j(t),i(t[0]),x(!1)})).catch((function(e){w(e),x(!1)}))}(B,"AIzaSyA5tO9GTE2eeYVJevuaZhtFhW_-FL1oA9s"),x(!0)}),[B]);return Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)(l,{isLoading:m}),r&&!g&&Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("div",{className:"searched-videos",children:Object(d.jsx)(h,{videoAPI:r,onClickTitle:function(e){x(!0),i(e)}})}),Object(d.jsx)(A,{video:n,endHandler:function(){r.indexOf(n)===r.length-1?i(r[0]):i(r[r.indexOf(n)+1])},readyHandler:function(){x(!1)}})]}),g&&Object(d.jsx)("p",{className:"error",children:"".concat(g)})]})}var m=function(){var e=Object(c.useState)(),t=Object(o.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)({}),a=Object(o.a)(s,2),r=a[0],j=a[1],O=Object(c.useState)(""),m=Object(o.a)(O,2),x=m[0],v=m[1],f=Object(c.useState)(!0),g=Object(o.a)(f,2),w=g[0],R=g[1],B=Object(c.useState)(""),L=Object(o.a)(B,2),G=L[0],y=L[1],P=Object(b.f)();return Object(c.useEffect)((function(){!function(e,t){var n="https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=".concat(e,"&key=").concat(t);fetch(n).then((function(e){if(!e.ok)throw new Error("".concat(e.status," Playlist not found."));return e.json()})).then((function(e){var t=e.items.map((function(e){return{id:e.id,title:e.snippet.title,desc:e.snippet.description,vid:e.contentDetails.videoId,publishedAt:e.snippet.publishedAt,channelTitle:e.snippet.channelTitle,imageURL:e.snippet.thumbnails.default.url}}));i(t),j(t[0]),R(!1)})).catch((function(e){v(e),R(!1)}))}("PL3oW2tjiIxvTSdJ4zqjL9dijeZ0LjcuGS","AIzaSyB6uu8KTL1PayJX2z4aNUTxFmi3Ry16fSM")}),[]),Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)(u,{onSearch:function(e){R(!0),y(e),P.push("search?query=".concat(e))}}),Object(d.jsx)(b.b,{path:"/MyTube",exact:!0,children:Object(d.jsx)(b.a,{to:"/"})}),Object(d.jsxs)(b.b,{path:"/",exact:!0,children:[Object(d.jsx)(l,{isLoading:w}),n&&!x&&Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("div",{className:"searched-videos",children:Object(d.jsx)(h,{videoAPI:n,onClickTitle:function(e){R(!0),j(e)}})}),Object(d.jsx)(A,{video:r,endHandler:function(){n.indexOf(r)===n.length-1?j(n[0]):j(n[n.indexOf(r)+1])},readyHandler:function(){R(!1)}})]}),x&&Object(d.jsx)("p",{className:"error",children:"".concat(x)})]}),Object(d.jsx)(b.b,{path:"/Search",children:Object(d.jsx)(p,{keyword:G})})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,60)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};a.a.render(Object(d.jsx)(i.a,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),x()}},[[59,1,2]]]);
//# sourceMappingURL=main.03c7d07c.chunk.js.map