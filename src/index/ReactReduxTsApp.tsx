/**
 * Created by mak on 6/8/16.
 */
import * as React from 'react';

interface Props {
  keywords: string[];
}

const formatter = (strings: string[], ...values: any[]) => {
  let str = "";

  for (let i = 0; i < strings.length; i++) {
    str += strings[i];

    if (i < values.length) {
      str += ` ${values[i]}`;
    }
  }
  return str;
};

export class ReactReduxTsApp extends React.Component<Props, {}> {
  public render() {
    return (
      <div className='content'>
        <h3 className='panel'>hi!</h3>
        <div>lets learn something</div>
        <ul>
          {this.props.keywords.map((keyword, index) => {
            return <li key={index}>{keyword}</li>;
          })}
          <li>...?</li>
        </ul>
        <img src="http://cdn.shopify.com/s/files/1/0860/3518/products/rightmeow_comp.jpg?v=1432861786" alt=""/>
      </div>
    );
  }
}
