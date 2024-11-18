const LoginScreen = ({ login, setUser }) => {
	const [isSigninInProgress, setIsSigninInProgress] = useState(false);

	return (
		<View style={styles.layout}>
			{isSigninInProgress && <ActivityIndicator />}
			<Text style={styles.title}>Login</Text>
			<Button
				title="entrar"
				onPress={() => {
					setIsSigninInProgress(true);
					onLogin()
						.then(dadosAuth => {
							//console.log(dadosAuth);
							setUser(dadosAuth.data.user);
							login(true);
							setIsSigninInProgress(false);
						})
						.catch(e => {
							setIsSigninInProgress(false);
						});
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	layout: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 32,
		marginBottom: 16,
	},
	text: {
		fontSize: 14,
		marginBottom: 16,
	},
});

export default LoginScreen;
