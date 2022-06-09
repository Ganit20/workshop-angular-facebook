import { MyDatePipe } from './my-date.pipe';

describe('MyDatePipe', () => {
  let pipe: MyDatePipe;

  beforeEach(()=> {
    pipe = new MyDatePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should returns empty string for falsy values', () => {
    const falsyValues=[false, '', null, undefined, NaN, 0];
    falsyValues.forEach(x=> {
      expect(pipe.transform(x)).toEqual('');
    })
   });

  it('should returns empty string for non-date values', () => {
    const falsyValues=[[], {}, ()=>'a'];
    falsyValues.forEach(x=> {
      expect(pipe.transform(x)).toEqual('');
    })
  });

  it('should return date', () => {
    const input=new Date('2022-06-09 10:20:30');
    expect(pipe.transform(input)).toEqual('9 czerwca 2022, 10:20');

  });

});
