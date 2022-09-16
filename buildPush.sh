currentBranch=$(git symbolic-ref --short -q HEAD)

PS3='Please enter your choice: '
options=("Create Build -> Publish -> Push" "Push Changes" "Quit")
select opt in "${options[@]}"
do
    case $opt in
        "Create Build -> Publish -> Push")
            npm run build
            npm publish
            npm version patch
            git push origin ${currentBranch}
            ;;
        "Push Changes")
            git push origin ${currentBranch}
            ;;
        "Quit")
            break
            ;;
        *) echo "invalid option $REPLY";;
    esac
done

