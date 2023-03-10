import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessageAPI } from '../redux/reducer/message';

const Message = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMessageAPI());
  }, []);
  const store = useSelector((store) => store.messageReducer);
  return (
    <div className="App">
      <span>
        Greeting: &nbsp;
        {store.text}
      </span>
    </div>
  );
};

export default Message;
