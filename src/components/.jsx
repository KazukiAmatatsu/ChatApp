<button onClick={() => setIsOpen(true)}>emoji</button>
      {selectedEmoji}
      <Emoji emoji={{ id: 'santa', skin: 3 }} size={16} />
      {isOpen && <Picker set='apple' onSelect={(emoji) => emojiSelect(emoji)} />}
      <Auth>
        <Switch>
          <LoggedInRoute exact path='/' component={Room} />
          {/* <LoggedInRoute exact path='/mypage' component={MyPage} /> */}
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
        </Switch>
      </Auth>
    </Router>
