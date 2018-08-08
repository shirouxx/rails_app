20.times do |t|
	Product.create(name:"商品#{t}" ,detail:"詳細#{t}",price:rand(1..1000))
end
