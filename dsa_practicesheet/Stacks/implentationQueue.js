class MyStack {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    push(x) {
        this.queue2.push(x);
        while (this.queue1.length) {
            this.queue2.push(this.queue1.shift());
        }
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
    }

    pop() {
        return this.queue1.shift();
    }

    top() {
        return this.queue1[0];
    }

    empty() {
        return this.queue1.length === 0;
    }
}

let st=new MyStack();
st.push(2);
st.push(4);
st.push(6);
st.push(8);
st.push(10);
console.log(st)

