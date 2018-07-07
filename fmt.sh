files=`find . -name "*.js" | grep -v "node_modules"`

for f in $files
do
	js-beautify -r $f
done
