
var Minimal_Angle = (h, m) => 
{
  let hour_angle = 0.5 * (h * 60 + m);
            let minute_angle = 6 * m;
            let angle = Math.abs(hour_angle - minute_angle);
             let angle1 = Math.min(360 - angle, angle);
            return angle1;       
};
 
