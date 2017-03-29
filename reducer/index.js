export default ( store={
	display:'0',
	former:0,
	latter:0,
	operator:''
}, action ) => {
	console.log(store,action);

	const {
		type,payload
	} = action;

	// 输入值
	if( type === 'INPUT' ){
		let newStore = {...store};

		// 当前输入为 . 且界面显示字符串已经有 .
		if( payload.number === '.' && (store.display.indexOf('.') > -1) ){
			return newStore
		}

		// 当前输入不为 . 且界面显示字符串为 0 
		if( 
			store.display === '0' &&
			payload.number !== '.'
		){
			newStore.display = payload.number;
		} else {
			newStore.display = store.display + payload.number;
		}

		// 当前无操作符
		if( !store.operator ){
			newStore.former = parseFloat(newStore.display);
		} else {
			
			if( store.latter === 0 && payload.number !== '.'){
				if( /^0.0*/g.test(store.display) ){
					newStore.display = store.display+payload.number;
				} else {
					newStore.display = payload.number;
				}
			} else {
				newStore.display = store.display + payload.number;
			}

			newStore.latter = parseFloat(newStore.display);
		}

		return newStore;
	}

	// 清除数据
	if( type === 'CLEAR' ){
		return {
			display:'0',
			former:0,
			latter:0,
			operator:''
		}
	}

	// 更改正负号
	if( type === 'TOGGLE_MINUS' ){
		let newStore = {...store};

		// 当前展示有 - ,改为正值
		if( newStore.display.charCodeAt(0) === '-'.charCodeAt(0) ){
			newStore.display = newStore.display.substring(1);
		} else {
			newStore.display = '-' + newStore.display
		}

		// 当前是正在输入后值
		if( store.latter ){
			newStore.latter = -store.latter;
		} else {
			newStore.former = -store.former;
		}

		return newStore;
	}

	// 将值除以100
	if( type === 'PERCENTAGE' ){
		let newStore = {...store};

		// 当前展示为 0
		if( store.display === '0' ){
			return newStore
		}

		newStore.display = '' + parseFloat(newStore.display)/100

		// 当前值为后值
		if( store.latter ){
			newStore.latter = store.latter/100;
		} else {
			newStore.former = store.former/100;
		}

		return newStore;
	}

	// 更新操作符
	if( type === 'UPDATE_OPERATOR' ){
		let newStore = {...store};
		
		const {
			former,latter,display,operator
		} = store;

		let newDisplay = display;
		let newFormer = former;
		let newLatter = latter

		// 当前已经有操作符并且有后值，则计算后作为前值
		if( store.operator && store.latter ){

			if( operator === 'plus' ){
				newDisplay = former + latter
			} else if( operator === 'minus' ){
				newDisplay = former - latter
			} else if( operator === 'devide' ){
				newDisplay = former / latter
			} else if( operator === 'multi' ){
				newDisplay = former * latter
			}

			newFormer = newDisplay;
			newLatter = 0;
		}

		return {
			...store,
			operator:payload.operator,
			display:`${newDisplay}`,
			former:newFormer,
			latter:newLatter
		}
	}

	// 获取结果
	if( type === 'GET_RESULT' ){
		const {
			operator,former,latter
		} = store;

		const display = 0;

		if( operator === 'plus' ){
			display = former + latter
		} else if( operator === 'minus' ){
			display = former - latter
		} else if( operator === 'devide' ){
			display = former / latter
		} else if( operator === 'multi' ){
			display = former * latter
		}

		return {
			...store,
			display:`${ display }`,
			latter:0,
			former:display
		}
	}
}