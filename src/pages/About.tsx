import { startTransition, useEffect, useMemo, useRef, useState } from 'react';
import { CustomButton } from "../Button";
import '../index.css';
import { Button } from 'antd';
import styled from '@emotion/styled';
import { css } from '@emotion/react'
import { FixedSizeList as List } from 'react-window';
import { debounce } from 'lodash-es';


const appClass = css`
  color: sandybrown;
  background-color: yellow;
  width: 120px;
`

const StyledVideo = styled.video`
  margin-top: 20px;
  width: 100%;
`;

const StyledButton = styled(Button)`
  ${appClass}
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: #4CAF50;
`;

const StyledAntdButton = styled(Button)`
  width: 150px;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;

const Home = () => {
  const [count, setCount] = useState(1);
  const [text,setText] = useState('Initial Text')
  const [items,setItems] = useState<number[]>([])
  const [isPending,setIsPending]= useState(false)

  const videoRef = useRef<HTMLVideoElement>(null);
  const ref = useRef<HTMLButtonElement>(null)

  const total = useMemo(() => count * 2, [count]);

  // let stream: MediaStream;

  // const handleClick = async () => {
  //   try {
  //     stream = await navigator.mediaDevices.getUserMedia({ video: true });
  //     console.log(stream);
  //     if (videoRef.current) {
  //       videoRef.current.srcObject = stream;
  //     }
  //   } catch (error) {
  //     console.log('error', error);
  //   }
  // };
  // const handleCloseVideo = () => {
  //   stream.getTracks().forEach((track) => track.stop());
  //   if (videoRef.current) {
  //     videoRef.current.srcObject = null;
  //   }
  // };

  // const handleCountClick = () => {
  //   setCount(count + 1)
  //   console.log(`count: ${count}`)
  // }

  const handleClick = () => {
    setIsPending(true)
    setText("Text updated immediately!");
    
    startTransition(()=> {
      updateItems()
      setIsPending(false)
    })
  }
  const updateItems = () => {
    const newItems = Array.from({ length: 10000 }, (_, i) => i + 1);
    setItems(newItems);
  }

  const incrementallyRenderList = () => {
    const totalItems = 10000;
    const batchSize = 500; // 每批渲染500个元素
    let currentIndex = 0;

    const renderBatch = () => {
      const newItems = Array.from({ length: batchSize }, (_, i) => currentIndex + i + 1);
      setItems((prevItems) => [...prevItems, ...newItems]); // 增量更新列表
      currentIndex += batchSize;

      if (currentIndex < totalItems) {
        requestIdleCallback(renderBatch); // 利用空闲时间继续渲染下一批
      } else {
        setIsPending(false); // 完成所有渲染后取消 pending 状态
      }
    };

    renderBatch();
  };

  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => (
    <div style={style}>Item {items[index]}</div>
  )

  useEffect(() => {
    return () => {
    }
  }, [])

  return (
    <div>
      <StyledButton css={appClass} onClick={() => debounce(() => setCount(count + 1), 1000)}>
        {count}
      </StyledButton>
      <h3>{text}</h3>
      <StyledAntdButton ref={ref} type='primary' onClick={handleClick}>
        click Me
      </StyledAntdButton>
      {isPending && <p>Updating list...</p>}
      {/* <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul> */}
      <List height={400} itemCount={items.length} itemSize={30} width={300}>
        {Row}
      </List>
      <Button type='primary' style={{ width: 200 }}>
        click
      </Button>
      <CustomButton
        text='click me'
        bgColor={'orange'}
        onCustomClick={(val) => console.log('val', val)}
      />
      <StyledVideo
        ref={videoRef}
        onLoadedMetadata={() => {
          videoRef.current?.play()
        }}
      ></StyledVideo>
    </div>
  )
}

export default Home