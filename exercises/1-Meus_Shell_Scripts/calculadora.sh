#!/bin/bash
#Autor: Luiz E F SIMOES - Turma 06
#Data: 27/06/2020
#Algoritmo teste de uma calculadora simples 4 operações



menu () #função menu - Pensei que não daria certo
{

clear

echo "	*************************************"
echo "	*	CALCULADORA 4 operações     *"
echo "	*                                   *"
echo "	*************************************"
echo 
echo 
echo "[ 1 ] Soma "
echo "[ 2 ] Subtração "
echo "[ 3 ] Multiplicação "
echo "[ 4 ] Divisão "
echo 
echo "Escolha uma das operações matemáticas acima ou [ 0 ] para sair:  "
read  opcao

case $opcao in
	1) soma ;;
	2) subtracao ;;
	3) multiplicacao ;; 
	4) divisao ;;
	0) exit ;;
esac

}

soma ()
{
	
	clear
	echo "Digite um número: "
	read num1
	echo "Digite um número: "
	read num2

	soma=$(($num1 + $num2 ))
	
	echo "Resultado da soma: $soma"

echo
echo "--------------------------------"
echo

	echo "O que você deseja fazer agora?"
	echo "[ c ] Continuar"
	echo "[ m ]  Ir para o menu Principal"
	echo "[ s ]  Sair do programa"
	
	echo "Escolher uma opção"
	read escolha

	if [ "$escolha" = "c" ]
	then
		soma
	elif [ "$escolha" = "m" ]
	then
		menu
	elif [ "$escolha" = "s" ]
	then
		clear		
		exit 
	else
		echo " Opção Inválida! "
	fi

}

subtracao ()
{
	
	clear
	echo "Digite um número: "
	read num1
	echo "Digite um número: "
	read num2

	sub=$(($num1 - $num2 ))
	
	echo "Resultado da soma: $sub"

echo
echo "--------------------------------"
echo

	echo "O que você deseja fazer agora?"
	echo "[ c ] Continuar"
	echo "[ m ]  Ir para o menu Principal"
	echo "[ s ]  Sair do programa"
	
	echo "Escolher uma opção"
	read escolha

	if [ "$escolha" = "c" ]
	then
		subtracao
	elif [ "$escolha" = "m" ]
	then
		menu
	elif [ "$escolha" = "s" ]
	then
		clear		
		exit 
	else
		echo " Opção Inválida! "
	fi

}

multiplicacao ()
{

	clear
	echo "Digite um número: "
	read num1
	echo "Digite um número: "
	read num2

	mult=$(($num1 * $num2 ))
	
	echo "Resultado da soma: $mult"

echo
echo "--------------------------------"
echo

	echo "O que você deseja fazer agora?"
	echo "[ c ] Continuar"
	echo "[ m ]  Ir para o menu Principal"
	echo "[ s ]  Sair do programa"
	
	echo "Escolher uma opção"
	read escolha

	if [ "$escolha" = "c" ]
	then
		multiplicacao
	elif [ "$escolha" = "m" ]
	then
		menu
	elif [ "$escolha" = "s" ]
	then
		clear		
		exit 
	else
		echo " Opção Inválida! "
	fi

}

divisao ()
{

	clear
	echo "Digite um número: "
	read num1
	echo "Digite um número: "
	read num2

	div=$(($num1 / $num2 ))
	
	echo "Resultado da soma: $div"

echo
echo "--------------------------------"
echo

	echo "O que você deseja fazer agora?"
	echo "[ c ] Continuar"
	echo "[ m ]  Ir para o menu Principal"
	echo "[ s ]  Sair do programa"
	
	echo "Escolher uma opção"
	read escolha

	if [ "$escolha" = "c" ]
	then
		divisao
	elif [ "$escolha" = "m" ]
	then
		menu
	elif [ "$escolha" = "s" ]
	then
		clear		
		exit 
	else
		echo " Opção Inválida! "
	fi

}


menu # CHAMAR a função MENU



