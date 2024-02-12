import React, { useState,useEffect } from "react"; 
import { 
	View, 
	Text, 
	TextInput, 
	TouchableOpacity, 
	FlatList, 
	StyleSheet, 
} from "react-native"; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskItem from "../component/TaskItem";
const Home = () => { 
	const [task, setTask] = useState(""); 
	const [tasks, setTasks] = useState([]); 
	const [editIndex, setEditIndex] = useState(-1); 
    useEffect(() => {
        loadTasks();
    }, []);
    const handleAddTask = () => {
        if (task) {
            if (editIndex !== -1) {
                const updatedTasks = [...tasks];
                updatedTasks[editIndex] = task;
                setTasks(updatedTasks);
                saveTasks(updatedTasks);
                setEditIndex(-1);
            } else {
                const updatedTasks = [...tasks, task];
                setTasks(updatedTasks);
                saveTasks(updatedTasks);
            }
            setTask("");
        }
    };

	
    const loadTasks = async () => {
        try {
            const savedTasks = await AsyncStorage.getItem('tasks');
            if (savedTasks) {
                setTasks(JSON.parse(savedTasks));
            }
        } catch (error) {
            console.error('Error loading tasks:', error);
        }
    };

    const saveTasks = async (updatedTasks) => {
        try {
            await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
            console.log("task save at local storage",updatedTasks)
        } catch (error) {
            console.error('Error saving tasks:', error);
        }
    };

	const handleEditTask = (index) => { 
		const taskToEdit = tasks[index]; 
		setTask(taskToEdit); 
		setEditIndex(index); 
	}; 
    const handleDeleteTask = async (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
        try {
            await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
            console.log("handle delete with async storage ",updatedTasks)
        } catch (error) {
            console.error('Error saving tasks:', error);
        }
    };
	
	const renderItem = ({ item, index }) => ( 
		<TaskItem
            item={item}
            index={index}
            handleEditTask={handleEditTask}
            handleDeleteTask={handleDeleteTask}
        />
	); 

	return ( 
		<View style={styles.container}> 
			<Text style={styles.heading}>Enter your Note</Text> 
			{/* <Text style={styles.title}>ToDo App</Text>  */}
			<TextInput 
				style={styles.input} 
				placeholder="Write a Note"
				value={task} 
				onChangeText={(text) => setTask(text)} 
			/> 
			<TouchableOpacity 
				style={styles.addButton} 
				onPress={handleAddTask}> 
				<Text style={styles.addButtonText}> 
					{editIndex !== -1 ? "Update Note" : "Add Note"} 
				</Text> 
			</TouchableOpacity> 
			<FlatList 
				data={tasks} 
				renderItem={renderItem} 
				keyExtractor={(item, index) => index.toString()} 
			/> 
		</View> 
	); 
}; 

const styles = StyleSheet.create({ 
	container: { 
		flex: 1, 
		padding: 40, 
		marginTop: 40, 
	}, 
	title: { 
		fontSize: 24, 
		fontWeight: "bold", 
		marginBottom: 20, 
	}, 
	heading: { 
		fontSize: 30, 
		fontWeight: "bold", 
		marginBottom: 7, 
		color: "green", 
	}, 
	input: { 
		borderWidth: 3, 
		borderColor: "#ccc", 
		padding: 10, 
		marginBottom: 10, 
		borderRadius: 10, 
		fontSize: 18, 
        width:'100%',
        height:'40%',
	}, 
	addButton: { 
		backgroundColor: "green", 
		padding: 10, 
		borderRadius: 5, 
		marginBottom: 10, 
	}, 
	addButtonText: { 
		color: "white", 
		fontWeight: "bold", 
		textAlign: "center", 
		fontSize: 18, 
	}, 
	task: { 
		flexDirection: "row", 
		justifyContent: "space-between", 
		alignItems: "center", 
		marginBottom: 15, 
		fontSize: 18, 
	}, 
	itemList: { 
		fontSize: 19, 
	}, 
	taskButtons: { 
		flexDirection: "row", 
	}, 
	editButton: { 
		marginRight: 10, 
		color: "green", 
		fontWeight: "bold", 
		fontSize: 18, 
	}, 
	deleteButton: { 
		color: "red", 
		fontWeight: "bold", 
		fontSize: 18, 
	}, 
}); 

export default Home;
