import React from 'react';
import './styles.css'
const CircleWidget = (props) => {
      const primaryBorderSize = 3
      const secondaryBorderSize = 5
      const tertiaryBorderSize = 9
      const height = 100
      const width = 100
      const fontSize = height/2;
      const circle = {
        'backgroundColor': '#fff',
        'border':`${primaryBorderSize}px solid green`,   
        'height':`${height}px`,
        'borderRadius':'50%',
        'MozBorderRadius':'50%',
        'WebkitBorderRadius':'50%',
        'width':`${width}px`,
        'boxShadow':`0 0 0 ${secondaryBorderSize}px hsl(0, 0%, 90%), 0 0 0 ${tertiaryBorderSize}px green`
      };
    const text = {
        'height': `${height}px`,
        'lineHeight': `${height}px`,
        'textAlign': 'center',
        'fontSize' : `${fontSize}px`
    }
    return (
      <div>
          <div style={circle} >
             <div style={text} >50</div>
          </div>
      </div>
    );
}
export default CircleWidget;