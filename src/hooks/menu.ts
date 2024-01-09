import { ref } from "vue";
import * as api from '@/api/api'
import * as TS from '@/utils/defind'
export function menu (){
const tableData1=ref([])
interface User {
	createTime:string,
	hidden:boolean,
	iFrame:boolean,
	icon:string,
	leaf:number,
	menuSort:number,
	title:string,
  id: number,
  hasChildren?: boolean
  children?: User[]
}

const inof=ref<TS.menu>({
	page:0,
	size:10
})

const menusAPI=async()=>{
	let res=await api.menusAPI(inof.value)
	console.log(res);

	// tableData1.value=res.data.content
}

const del= async(id:number)=>{

	let res=await api.menusdelAPI([id])
}


const load = async (
  row: User,
  treeNode: unknown,
  resolve: (date: User[]) => void
) => {
	let res= await api.menuspidAPI({pid:row.id})
		// const data:User[]=res.data.content
		// resolve(data)
	}

// menusAPI()
return { menusAPI,tableData1,del,load }
}
