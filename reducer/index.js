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

	// ����ֵ
	if( type === 'INPUT' ){
		let newStore = {...store};

		// ��ǰ����Ϊ . �ҽ�����ʾ�ַ����Ѿ��� .
		if( payload.number === '.' && (store.display.indexOf('.') > -1) ){
			return newStore
		}

		// ��ǰ���벻Ϊ . �ҽ�����ʾ�ַ���Ϊ 0 
		if( 
			store.display === '0' &&
			payload.number !== '.'
		){
			newStore.display = payload.number;
		} else {
			newStore.display = store.display + payload.number;
		}

		// ��ǰ�޲�����
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

	// �������
	if( type === 'CLEAR' ){
		return {
			display:'0',
			former:0,
			latter:0,
			operator:''
		}
	}

	// ����������
	if( type === 'TOGGLE_MINUS' ){
		let newStore = {...store};

		// ��ǰչʾ�� - ,��Ϊ��ֵ
		if( newStore.display.charCodeAt(0) === '-'.charCodeAt(0) ){
			newStore.display = newStore.display.substring(1);
		} else {
			newStore.display = '-' + newStore.display
		}

		// ��ǰ�����������ֵ
		if( store.latter ){
			newStore.latter = -store.latter;
		} else {
			newStore.former = -store.former;
		}

		return newStore;
	}

	// ��ֵ����100
	if( type === 'PERCENTAGE' ){
		let newStore = {...store};

		// ��ǰչʾΪ 0
		if( store.display === '0' ){
			return newStore
		}

		newStore.display = '' + parseFloat(newStore.display)/100

		// ��ǰֵΪ��ֵ
		if( store.latter ){
			newStore.latter = store.latter/100;
		} else {
			newStore.former = store.former/100;
		}

		return newStore;
	}

	// ���²�����
	if( type === 'UPDATE_OPERATOR' ){
		let newStore = {...store};
		
		const {
			former,latter,display,operator
		} = store;

		let newDisplay = display;
		let newFormer = former;
		let newLatter = latter

		// ��ǰ�Ѿ��в����������к�ֵ����������Ϊǰֵ
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

	// ��ȡ���
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