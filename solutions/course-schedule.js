/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

var canFinish = function(numCourses, prerequisites) {
  const dfs = (target) => {
      if (courseMap[target] === undefined) return true;
      
      const dependency = [target];

      for (const courseNum of courseMap[target]) {
          dependency.push(courseNum);
          
          const target = courseMap[courseNum];

          // failed..
      }
      return false;
  }

  const courseMap = {};
  
  for (const prerequisite of prerequisites) {
      const [course, preCourse] = prerequisite;

      courseMap[course] = courseMap[course] ?  courseMap[course] : preCourse
      [...courseMap[course], preCourse] : [preCourse];
  }
  
  for (const key in courseMap) {
      const preCourses = courseMap[key];
      let flag ;

      for (const preCourse of preCourses) {
          if (courseMap[preCourse]) {
          }
      }
      if (currentCourse)
  }

  return Object.values(courseMap).length < numCourses;;
};