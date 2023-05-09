
import { useCallback, useState } from 'react';

export default function WokkoutForm() {
  const [ workout, setWorkout] = useState({
    name: "",
    part: "",
  });

  //input에 입력될 때마다 state값 변경되게 하는 함수
  const onChangeWorkoutName = (e: { target: { name: any; value: any; }; }) => {
    setWorkout({...workout, name: e.target.value });
  };

  const onChangeWorkoutPart = (e: { target: { name: any; value: any; }; }) => {
    setWorkout({ ...workout, part: e.target.value });
  };
  
  
  function handleSubmit() {
    alert(
      "운동 부위 : " + workout.part + "\n" +
      "운동 종목 : " + workout.name
    );
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <hr />
      <p>
       운동 부위:
        <label><input type="radio" name="workoutPart" value="back" checked={workout.part === 'back'} onChange={onChangeWorkoutPart}/> 등</label>
        <label><input type="radio" name="workoutPart" value="shoulder" checked={workout.part === 'shoulder'} onChange={onChangeWorkoutPart} /> 어깨</label>
        <label><input type="radio" name="workoutPart" value="leg" checked={workout.part === 'leg'} onChange={onChangeWorkoutPart}/> 하체</label>
      </p>
      <hr />
      <label>
        운동 종목: <input name="workoutName" value={workout.name} onChange={onChangeWorkoutName}/>
      </label>
      <hr />
  
      <button type="reset">Reset form</button>
      <button type="submit">Submit form</button>
    </form>
  );
  
}
