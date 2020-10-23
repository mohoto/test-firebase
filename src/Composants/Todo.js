import React from 'react';
import { List, Avatar } from 'antd';

export default function Todo(props) {
    return (
        <List.Item>
            <List.Item.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={<a href="https://ant.design">{props.txt}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
        </List.Item>
    )
}
