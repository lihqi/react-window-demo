import React from "react";
const ListItem = ({ index, style, data }) => {
    const item = data[index];
    return (
        <div className="ant-list-item" style={style}>
            <div className="ant-list-item-meta">
                <div className="ant-list-item-meta-avatar">
                    <span className="ant-avatar ant-avatar-circle ant-avatar-image">
                        <img src={item.avatar} alt="" />
                    </span>
                </div>
                <div className="ant-list-item-meta-content">
                    <h4 className="ant-list-item-meta-title ellipsis">
                        {item.title}
                    </h4>
                    <div className="ant-list-item-meta-description ellipsis">
                        {item.description}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ListItem;
