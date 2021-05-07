import React, { useState } from "react";

//create your first component
export function Home() {
	const [tarea, setTarea] = useState("");
	const [lista, setLista] = useState([]);
	const [mouse, setMouse] = useState();

	const agregarTarea = e => {
		e.preventDefault();
		setLista([...lista, tarea]);
		setTarea("");
	};

	const eliminarTarea = i => {
		let nuevaLista = lista.filter((elem, index) => {
			{
				if (index != i) {
					return elem;
				}
			}
		});
		setLista(nuevaLista);
	};

	const mouseOver = i => {
		setMouse(i);
	};

	return (
		// Contenedor del to-do list
		<div className="container">
			{/* Titulo del to-do list */}
			<div className="titulo">Lista de Tareas</div>
			<ul className="list-group">
				{/* Form agregar tarea */}
				<li className="list-group-item">
					<form onSubmit={agregarTarea}>
						<div className="form-row align-items-center">
							<div className="col-11">
								<label
									className="sr-only"
									htmlFor="inlineFormInput">
									Name
								</label>
								<input
									type="text"
									className="form-control mb-2"
									id="inlineFormInput"
									placeholder="Agregar nueva tarea"
									onChange={e => setTarea(e.target.value)}
									value={tarea}
								/>
							</div>
							<div className="col-1">
								<button
									type="submit"
									className="btn btn-primary mb-2">
									<i className="fas fa-plus"></i>
								</button>
							</div>
						</div>
					</form>

					<div>
						{lista.map((e, i) => {
							return (
								<div
									key={i}
									onMouseOver={() => {
										mouseOver(i);
									}}
									onClick={() => {
										eliminarTarea(i);
									}}>
									<li className="list-group-item">
										{e}{" "}
										<button className="borrar_tarea">
											<i
												className={
													"fas fa-times" +
													(mouse == i
														? ""
														: " invisible")
												}></i>
										</button>
									</li>
								</div>
							);
						})}
					</div>
				</li>
				<footer className="footer">
					<p> {lista.length} items left</p>
				</footer>
			</ul>
		</div>
	);
}
