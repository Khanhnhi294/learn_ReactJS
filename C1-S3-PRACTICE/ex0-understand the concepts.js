// 1. Benefit of function default argument
    //  Linh hoạt: Đối với "function default argument" nó rất linh hoạt khi sử dụng.
    //  Ví dụ: khi sử dụng hàm có nhiều tham số được định nghĩa trước, nhưng trong quá trình sử dụng thì mình chỉ cần một vài đối số cần thiết. Và "function default argument" cho phép chúng ta gọi những đối số cần thiết để sử dụng mà không cần gọi hết. 
          function multiply(a, b = 1) {
            return a * b;
          }
          console.log(multiply(5, 2));
          // output: 10

          console.log(multiply(5));
          // output: 5`
    
// 2. Benefit of arrow functions
    // Ngắn gọn và tối ưu, làm cho code dễ nhìn và dễ hiểu
    // Phù hợp để dùng với cú pháp của ES6
    // Ví dụ:
        // 1. thay vì sử dụng
        (function (a) {
          return a + 100;
        });
        // thì mình sử dụng 
        (a) => {
          return a + 100;
        };
        // 2. sử dụng các cú pháp của ES6
        const arr = [5, 6, 13, 0, 1, 18, 23];
        const even = arr.filter((v) => v % 2 === 0);
        // [6, 0, 18]
          
// 3. Benefit of the destructuring syntax
      // Phá vỡ mảng cũ và sử dụng nó theo cách mình muốn để tối ưu và dễ dàng sử dụng code với các cú pháp của ES6
      // Ví dụ:
      const { a, ...others } = { a: 1, b: 2, c: 3 };
      console.log(others); // { b: 2, c: 3 }
// 4. Benefit of the spread operator
      //  Áp dụng các cú pháp của ES6
      //  Ví dụ:
      let arr1 = [0, 1, 2];
      const arr2 = [3, 4, 5];

      arr1 = [...arr1, ...arr2];
      // arr1 is now [0, 1, 2, 3, 4, 5]
