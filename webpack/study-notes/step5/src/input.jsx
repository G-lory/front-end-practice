// input.jsx
import React, { Component } from 'react';
import styles from './input.less';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        };
    }
    submit() {
        if (this.state.content === '') return ;
        // 提交数据并清空
        this.props.handleSubmit(this.state.content);
        this.setState({
            content: ''
        })
    }
    handleChange(e) {
        this.setState({
            content: e.target.value
        })
    }
    render() {
        return (
          <div className={styles.input}>
              <p>
                    <textarea
                      value={this.state.content}
                      onChange={this.handleChange.bind(this)}

                    >
                    </textarea>
              </p>
              <p className={styles.btn}>
                  <button onClick={this.submit.bind(this)}>提交</button>
              </p>
          </div>
        )
    }
}

export default Input;