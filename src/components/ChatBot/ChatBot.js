"use client"
import dynamic from 'next/dynamic';
import React, { Component } from 'react'

export class ChatBot extends Component {
    componentDidMount () {
        (function(d, m){
            var kommunicateSettings = 
                {"appId":"c07450bffaf5dc13d6b078b7f77d250c","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

// export default ChatBot

export default dynamic(() => Promise.resolve(ChatBot), {ssr: false})
