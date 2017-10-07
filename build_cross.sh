#!/bin/bash
echo "########################################"
echo "build cross"
echo "########################################"
echo "----------------------------------------"
time_now=$(date)
main()
{
  deploy_heroku
  deploy_firebase
  exit 1
}
deploy_heroku()
{
  echo "########################################"
  echo "Inicializando deploy heroku"
  sudo cp -r dist/* ../curriculo-gratis/dist/
  echo "########################################"
  echo "Copy and past - DONE "
  cd ../curriculo-gratis
  echo "########################################"
  echo "Enter in directory - DONE "
  git status
  echo "########################################"
  echo "Status - DONE "
  git add .
  echo "########################################"
  echo "Add - DONE "
  git commit -m 'upgrade with shell-script'
  echo "########################################"
  echo "Commit - DONE "
}
deploy_firebase()
{
  echo "########################################"
  echo "Inicializando deploy firebase"
  sudo cp -r dist/* ../curriculo_gratis-base/public/
  echo "########################################"
  echo "Copy and past - DONE "
  cd ../curriculo_gratis-base
  echo "########################################"
  echo "Enter in directory - DONE "
  firebase deploy
  echo "########################################"
  echo "Deploy base - DONE "
}
echo "----------------------------------------"
echo "########################################"
echo "Ola, hoje e " $time_now " ;-)"
echo "Deseja iniciar o programa? y/n"
read resp
if [ $resp == "y" ]
  then
    main
  else
    echo "########################################"
    echo "Good bye ;-)"
fi
echo "----------------------------------------"
echo "########################################"
echo "----------------------------------------"
echo "finish"
echo "----------------------------------------"
echo "########################################"
